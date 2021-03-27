
const NoteCard = (props) => {

    const noteUrl = props.noteUrl
    const thumbUrl = props.thumbUrl;
    const title = props.title;
    const desc = props.desc

    return (
        <div class="card card-shadow shadow" style="max-width: 18rem;">

            <a href="{noteUrl}">
                <img class="card-img-top" src="{thumbUrl}" ></img>
            </a>
            <div class="card-body">
                <a href="{noteUrl}"><h5 class="card-title">{title}</h5></a>
                <p class="card-text" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;max-width: 300px;">{desc}</p>
            </div>

        </div>
    )
}
