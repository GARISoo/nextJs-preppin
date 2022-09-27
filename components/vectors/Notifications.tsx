import * as React from "react"
import { SVGProps } from "react"

const NotificationSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={21}
        height={21}
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10.417 20.917c-.691-.003-1.353-.223-1.843-.613s-.768-.918-.775-1.47h5.209c.003.278-.064.554-.195.812a2.25 2.25 0 0 1-.753.795c-.326.214-.71.363-1.123.434h-.06c-.152.025-.306.04-.46.042Zm10.416-3.125H0v-2.084l2.604-1.041v-5.73c-.068-1.47.346-2.927 1.203-4.229a5.403 5.403 0 0 1 1.687-1.52c.69-.406 1.48-.69 2.319-.834V.084h5.208v2.27c3.358.64 5.208 2.977 5.208 6.584v5.729l2.604 1.041v2.084Z"
        />
    </svg>
)

export default NotificationSvg