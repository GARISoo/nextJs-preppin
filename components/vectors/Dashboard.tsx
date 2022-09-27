import * as React from "react"
import { SVGProps } from "react"

const DashboardSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={19}
        height={19}
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M6.375 18.875H2.208a2.09 2.09 0 0 1-2.083-2.083V2.208A2.09 2.09 0 0 1 2.208.125h4.167a2.09 2.09 0 0 1 2.083 2.083v14.584a2.09 2.09 0 0 1-2.083 2.083Zm6.25 0h4.167a2.09 2.09 0 0 0 2.083-2.083v-5.209A2.09 2.09 0 0 0 16.792 9.5h-4.167a2.09 2.09 0 0 0-2.083 2.083v5.209a2.09 2.09 0 0 0 2.083 2.083Zm6.25-13.542V2.208A2.09 2.09 0 0 0 16.792.125h-4.167a2.09 2.09 0 0 0-2.083 2.083v3.125a2.09 2.09 0 0 0 2.083 2.084h4.167a2.09 2.09 0 0 0 2.083-2.084Z"
        />
    </svg>
)

export default DashboardSvg
