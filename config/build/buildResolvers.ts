import { ResolveOptions } from "webpack";

export function buildleResolver(): ResolveOptions{
    return { 
        extensions: ['.tsx', '.ts', '.js'], 
    }
}