import { NextApiRequest, NextPage } from "next";

export type Layout = "default" | "none";

export type NextCustomPage<P = {}, IP = P> = NextPage<P, IP> & {
    layout: Layout;
};