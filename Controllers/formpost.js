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

    addSubmit(){
        const handleSubimit = (event) => {
            event.preventDefault();
            
            const newPost = document.createElement('li');
            newPost.classList.add('posts-list');
            newPost.innerHTML = `
            <div class="info-user-post">
            <div class="img-user-post"></div>
            <div class="name-hour">
                <strong>Vinicius Jose</strong>
                <p>21h</p>
            </div>
        </div>

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nihil ducimus nesciunt officia voluptatem voluptate quas quaerat obcaecati odit commodi sit doloremque officiis quis doloribus, ratione assumenda nulla aliquam aut!
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

        }

        this.onSubmit(handleSubimit);
    }
  
}

const postForm = new FormPost('formPost', 'textArea', 'posts');