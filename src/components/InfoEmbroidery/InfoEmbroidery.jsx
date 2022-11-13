import { WrapStyled } from "./InfoEmbroideryStyled";

const InfoEmbroidery = ({ size }) => {
    const sizeCanvaWidth = () => ((size.width / size.size * 2.54 * size.amountYarn ) + (size.margin * 2)).toFixed(2);
    
    const sizeCanvaHeight = () => ((size.height / size.size * 2.54 * size.amountYarn) + (size.margin * 2)).toFixed(2);
    return (
        <WrapStyled>
            <p><b>Розмір вишивки:</b> {sizeCanvaWidth()} x {sizeCanvaHeight()} см.</p>
            <p>З відступом по <b>{size.margin} см </b>з кожної сторони включно.</p>
        </WrapStyled>
    )
}

export default InfoEmbroidery;