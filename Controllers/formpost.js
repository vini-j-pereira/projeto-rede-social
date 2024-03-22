export class FormPost {
    constructor(idForm, idTextarea, idUlPost) {
        this.form = document.getElementById(idForm);
        this.textarea = document.getElementById(idTextarea);
        this.ulPost = document.getElementById(idUlPost);
        this.addSubmit();
    }

    onSubmit(func){
        this.form.addEventListener('submit', func)
    }

    formValidate(value){
       if (value === '' || value === null || value === undefined || value.length < 3){
        return false
       }
       return true
    }

    getTime(){
        const time = new Date();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        return `${hour}h ${minutes}min`
    }

    addSubmit(){
        const handleSubimit = (event) => {
            event.preventDefault();
            if(this.formValidate(this.textarea.value)){
            const time = this.getTime();
            const newPost = document.createElement('li');
            newPost.classList.add('posts-list');
            newPost.innerHTML = `
            <div class="info-user-post">
            <div class="img-user-post"></div>
            <div class="name-hour">
                <strong>Vinicius Jose</strong>
                <p>${time}</p>
            </div>
        </div>

        <p>
            ${this.textarea.value}
        </p>

        <div class="action-btn-post">
            <button type="button" class="files-post-like">
                <img src="assets/heart.svg" alt="curtir">
                Curtir
            </button>

            <button type="button" class="files-post-comment">
                <img src="assets/comment.svg" alt="comentar">
                Comentar
            </button>

            <button type="button" class="files-post-share">
                <img src="assets/share.svg" alt="compartilhar">
                Compartilhar
            </button>
        </div>
            `;
            this.ulPost.append(newPost);
            this.textarea.value = "";

            }else {
                alert('Verifique o campo digitado.')
            }
        }

        this.onSubmit(handleSubimit);
    }
  
}

const postForm = new FormPost('formPost', 'textArea', 'posts');