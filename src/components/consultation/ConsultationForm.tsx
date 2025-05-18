"use client";
import { useState } from "react"
import styles from './Consultation.module.scss';
import axios from "axios";

// interface FormSubmitErrorResponse {
//   message?: string; // FormSubmit.co может возвращать "message"
//   error?: string;   // Иногда бывает "error"
//   // другие возможные поля, если они есть
// }

const ConsultationForm = () =>{

    const [phone, setPhone] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        _subject: '', // Тема письма (FormSubmit.co)
        _captcha: 'false',// Отключаем стандартную CAPTCHA от FormSubmit.co для AJAX
    });

    const [status, setStatus] = useState('');
    // const [responseMessage, setResponseMessage] = useState('');

    const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/over90006at9@gmail.com';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setStatus('loading');
        // setResponseMessage('');

        if (!formData.name || !phone) {
            setStatus('error');
            // setResponseMessage('Пожалуйста, заполните имя и телефон.');
            return;
        }

        const newData = {
            имя: formData.name,
            телефон: phone,
            _subject: `Новая заявка с сайта! (${new Date().toLocaleString()})`,
            _captcha: formData._captcha,
        }

        try {
            const response = await axios.post(FORMSUBMIT_ENDPOINT, newData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
        });

        // FormSubmit.co при AJAX запросе и успехе обычно возвращает { success: "true" } или { success: "The form was submitted successfully." }
        // Проверяем наличие поля success и его значение (может немного отличаться)
        if (response.data && (response.data.success === "true" || response.data.success?.includes("submitted successfully"))) {
            setStatus('success');
            // setResponseMessage('Сообщение успешно отправлено! Спасибо.');
            setFormData({
                name: '',
                phone: '',
                _subject: formData._subject,
                _captcha: formData._captcha,
            }); 
        } else {
            setStatus('error');
            // setResponseMessage(response.data?.message || 'Произошла ошибка при отправке.');
        }
        } catch (error: unknown) { 
            setStatus('error');

            // setResponseMessage(`Ошибка: ${errorMessage}`);
            console.error('Submission error:', error);
        }
    }

    if (status == 'success') return(
        <>
            <h2>Спасибо!</h2>
            <p>Скоро с вами свяжется наш оператор по указанному номеру. </p>
        </>
    )

    if (status == 'error') return(
        <>
            <h2>Ошибка!</h2>
            <p>Что-то пошло не так, попробуйте еще раз позднее </p>
        </>
    )

    return(
        <>
            <h2>Консультация</h2>
            <article>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className={styles.inputs}>
                        <input 
                            placeholder="Имя" 
                            required type='text' 
                            name="name"
                            onChange={handleChange}
                        />
                        <input 
                            placeholder="Телефон" 
                            required type='tel' 
                            name="phone"
                            maxLength={12}
                            value={phone}
                            onChange={(e) => {
                                const digitsOnly = e.target.value.replace(/\D/g, '');
                                setPhone(digitsOnly);
                            }}
                        />
                        <p>Отправляя форму, вы соглашаетесь с политикой обработки данных.</p>
                    </div>
                    <button type="submit">Оставить заявку</button>
                </form>            
            </article>
        </>
    )
}

export default ConsultationForm