export default function Article({title, text}:{title: string, text:string}){
    return(
        <article className="container w-100 d-flex flex-column">
            <h2 className="text-info fw-semibold fs-1">{title}</h2>
            <p className="fs-5 lh-lg text-start">{text}</p>
        </article>
    )
}