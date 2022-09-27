import * as React from "react"
import { SVGProps } from "react"

const SupportSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={21}
        height={21}
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10.5.083C4.756.083.083 4.756.083 10.5v4.316c0 1.066.935 1.934 2.084 1.934h1.042a1.041 1.041 0 0 0 1.041-1.042v-5.357A1.042 1.042 0 0 0 3.208 9.31h-.945C2.842 5.28 6.31 2.167 10.5 2.167c4.19 0 7.659 3.111 8.238 7.142h-.946a1.042 1.042 0 0 0-1.042 1.042v6.399a2.085 2.085 0 0 1-2.083 2.083h-2.083v-1.041H8.417v3.125h6.25a4.17 4.17 0 0 0 4.167-4.167c1.149 0 2.083-.868 2.083-1.934V10.5C20.917 4.756 16.244.083 10.5.083Z"
        />
    </svg>
)

export default SupportSvg
