import React from 'react';

export const Contact = () => {
  return (
    <div className='main-content-div'>
      <div className='contact-div'>
        <div className='contact-icons'>
          <a href='https://github.com/hilvitzs'><svg className='icon' xmlns='http://www.w3.org/2000/svg' width='438.549' height='438.549' viewBox='0 0 438.549 438.549'><path d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z' /></svg></a>
          <a href='https://www.linkedin.com/in/spencerhilvitz/'><svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 486.392 486.392'><path d='M243.196 0C108.89 0 0 108.89 0 243.196s108.89 243.196 243.196 243.196 243.196-108.89 243.196-243.196C486.392 108.86 377.502 0 243.196 0zm-60.8 360.994H121.6V148.197h60.8v212.797zm-28.514-225.838c-15.747 0-28.484-12.768-28.484-28.515s12.768-28.514 28.484-28.514c15.747.03 28.515 12.798 28.515 28.515 0 15.748-12.768 28.516-28.515 28.516zm241.31 225.838h-60.798v-131.57c0-15.412-4.408-26.203-23.347-26.203-31.403 0-37.452 26.205-37.452 26.205v131.57h-60.8V148.196h60.8v20.337c8.694-6.657 30.4-20.307 60.8-20.307 19.698 0 60.798 11.795 60.798 83.05v129.717z' /></svg></a>
          <a href='https://twitter.com/hilvitzs'><svg className='icon' xmlns='http://www.w3.org/2000/svg' width='49.652' height='49.652' viewBox='0 0 49.652 49.652'><path d='M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zM35.9 19.144c.012.246.018.494.018.742 0 7.55-5.746 16.255-16.26 16.255-3.226 0-6.23-.942-8.758-2.564.447.053.902.08 1.363.08 2.678 0 5.14-.914 7.097-2.446-2.5-.046-4.61-1.698-5.338-3.97.348.067.707.104 1.074.104.52 0 1.027-.068 1.506-.2-2.614-.523-4.583-2.832-4.583-5.602v-.072c.77.427 1.65.685 2.587.714-1.532-1.023-2.54-2.773-2.54-4.755 0-1.05.28-2.03.772-2.875 2.816 3.458 7.028 5.732 11.776 5.972-.098-.42-.147-.854-.147-1.303 0-3.155 2.557-5.714 5.712-5.714 1.644 0 3.127.694 4.17 1.804 1.304-.256 2.524-.73 3.63-1.387-.43 1.335-1.332 2.454-2.515 3.162 1.157-.14 2.26-.445 3.282-.9-.763 1.144-1.732 2.15-2.85 2.954z' /></svg></a>
        </div>
        <form className='contact-form' action='https://formspree.io/spencerhilvitz@gmail.com' method='POST'>
          <label>
            Name
            <input className='name-input input' type='text' name='name' placeholder='name' />
          </label>
          <label>
            Email
            <input className='email-input input' type='email' name='_replyto' placeholder='email' />
          </label>
          <label id='message-label'>
            Message
            <textarea className='contact-content input' type='message' name='message' placeholder='message' />
          </label>
          <input className='submit-button' type='submit' value='Submit' />
          <p className='email'>You can also email me at <a id='email-address' href='mailto:spencerhilvitz@gmail.com'>spencer.hilvitz@gmail.com</a></p>
        </form>
      </div>
    </div>
  );
};
