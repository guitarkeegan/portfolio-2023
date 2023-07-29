export default function Project({params}: {params: {title: string}}){
    return (
        <div>{params.title}</div>
    )
}