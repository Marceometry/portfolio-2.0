import projects from '../../src/css/components/projects.module.scss'

type ArrowProps = {
    show: boolean
    disabled: boolean
}

export function ArrowLeft({ disabled, show }: ArrowProps) {    
    return (
        <svg className={`${show ? 'side-appear-reverse' : ''} ${disabled && projects.disabled}`} width="84" height="110" viewBox="0 0 84 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
        <path d="M55.4146 92.4509L18.9675 56.0345C17.6775 54.7676 17.6775 52.5843 18.9675 51.3174L55.4146 14.874C56.6287 13.661 58.551 13.7149 59.7144 15.0088L70.7169 27.516C71.8804 28.8368 71.8045 30.9393 70.5145 32.1523L47.5991 53.6625L70.5145 75.1457C71.8045 76.3587 71.9057 78.4612 70.7169 79.782L59.7144 92.2892C58.5763 93.61 56.654 93.6639 55.4146 92.4509Z" fill="#A32DDF"/>
        <path d="M19.3178 55.6778L19.3209 55.6808L55.7644 92.0936C55.765 92.0942 55.7656 92.0947 55.7661 92.0953C56.8047 93.11 58.3914 93.0586 59.3357 91.9628L59.339 91.9589L70.3414 79.4517L70.3452 79.4475C71.35 78.3311 71.2662 76.5389 70.172 75.51L47.2571 54.0272L46.8683 53.6627L47.2569 53.2979L70.172 31.788C71.2615 30.7635 71.3303 28.9688 70.3417 27.8465L70.3415 27.8462L59.3409 15.3411C58.3665 14.2596 56.7764 14.2203 55.768 15.2277L19.321 51.671L19.3178 51.6741C18.2274 52.745 18.2274 54.6069 19.3178 55.6778Z" stroke="#202020"/>
        </g>
        <defs>
        <filter id="filter0_d" x="0" y="0" width="83.5487" height="109.322" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="0" dy="1"/>
        <feGaussianBlur stdDeviation="7.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
        </svg>
    )
}

export function ArrowRight({ disabled, show }: ArrowProps) {    
    return (
        <svg className={`${show ? 'side-appear' : ''} ${disabled && projects.disabled}`}  width="84" height="110" viewBox="0 0 84 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d)">
        <path d="M34.1341 92.4509L70.5812 56.0345C71.8712 54.7676 71.8712 52.5843 70.5812 51.3174L34.1341 14.874C32.92 13.661 30.9977 13.7149 29.8343 15.0088L18.8318 27.516C17.6683 28.8368 17.7442 30.9393 19.0342 32.1523L41.9496 53.6625L19.0342 75.1457C17.7442 76.3587 17.6431 78.4612 18.8318 79.782L29.8343 92.2892C30.9724 93.61 32.8947 93.6639 34.1341 92.4509Z" fill="#A32DDF"/>
        <path d="M70.2309 55.6778L70.2278 55.6808L33.7843 92.0936C33.7837 92.0942 33.7832 92.0947 33.7826 92.0953C32.744 93.11 31.1573 93.0586 30.2131 91.9628L30.2097 91.9589L19.2073 79.4517L19.2035 79.4475C18.1987 78.3311 18.2825 76.5389 19.3767 75.51L42.2916 54.0272L42.6804 53.6627L42.2918 53.2979L19.3767 31.788C18.2872 30.7635 18.2184 28.9688 19.207 27.8465L19.2072 27.8462L30.2078 15.3411C31.1822 14.2596 32.7723 14.2203 33.7807 15.2277L70.2277 51.671L70.2309 51.6741C71.3213 52.745 71.3213 54.6069 70.2309 55.6778Z" stroke="#202020"/>
        </g>
        <defs>
        <filter id="filter0_d" x="0" y="0" width="83.5487" height="109.322" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dx="0" dy="1"/>
        <feGaussianBlur stdDeviation="7.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
        </svg>
    )
}