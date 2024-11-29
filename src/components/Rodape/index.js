import './index.css'

const Rodape = ( ) => {
    return (
        <div className='rodape'>
            <footer>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/login/?locale=pt_BR">
                            <i>
                                <img src="/imagens/fb.png" alt="Facebook"/>
                            </i>
                        </a>                      
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <i>
                                <img src="/imagens/ig.png" alt="Instagram"/>
                            </i>
                        </a>
                    </li>
                    <li>
                        <a href='https://x.com/?lang=pt-br&mx=2'>
                            <i>
                                <img src="/imagens/tw.png" alt="Twitter"/>
                            </i>
                        </a>
                    </li>
                </ul>

                <img src="/imagens/fundo.png" alt="Rodapé."/>
            </footer>
        </div>
    )
}

export default Rodape;
