import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current!, 'YOUR_USER_ID').then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      }
    );
    //reset the form after submitting
    // e.currentTarget.reset();
  };

  return (
    <section
      id='contact'
      className='py-20 bg-secondary text-primary'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-6'>Contact Me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='space-y-6 max-w-lg mx-auto'
        >
          <div>
            <label className='block text-lg font-medium'>Name</label>
            <input
              type='text'
              name='user_name'
              className='mt-1 block w-full border-primary rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary text-secondary'
              required
            />
          </div>
          <div>
            <label className='block text-lg font-medium'>Email</label>
            <input
              type='email'
              name='user_email'
              className='mt-1 block w-full border-primary rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary text-secondary'
              required
            />
          </div>
          <div>
            <label className='block text-lg font-medium'>Message</label>
            <textarea
              name='message'
              className='mt-1 block w-full border-primary rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary text-secondary'
              rows={5}
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-primary text-secondary py-2 rounded-md hover:bg-primary[300]'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
