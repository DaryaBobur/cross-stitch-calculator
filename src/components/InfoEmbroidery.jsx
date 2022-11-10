
const InfoEmbroidery = ({size}) => {
    const sizeCanvaWidth = () => Math.ceil((size.width * 2.54 / size.size) + (size.margin * 2));
    
    const sizeCanvaHeight = () => Math.ceil((size.height * 2.54 / size.size) + (size.margin * 2));
    return (
        <div>
            <p>Розмір вишивки: {sizeCanvaWidth()} x {sizeCanvaHeight()} см.</p>
            <p>Відступ по {size.margin} см з кожної сторони.</p>
        </div>
    )
}

export default InfoEmbroidery;