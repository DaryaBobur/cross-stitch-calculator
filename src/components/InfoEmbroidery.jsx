
const InfoEmbroidery = ({ size }) => {
    const sizeCanvaWidth = () => ((size.width / size.size * 2.54 * size.amountYarn ) + (size.margin * 2)).toFixed(2);
    
    const sizeCanvaHeight = () => ((size.height / size.size * 2.54 * size.amountYarn) + (size.margin * 2)).toFixed(2);
    return (
        <div>
            <p>Розмір вишивки: {sizeCanvaWidth()} x {sizeCanvaHeight()} см.</p>
            <p>З відступом по {size.margin} см з кожної сторони включно.</p>
        </div>
    )
}

export default InfoEmbroidery;