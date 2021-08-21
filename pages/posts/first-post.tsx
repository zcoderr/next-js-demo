// 第一篇文章
import React from "react"
import {NextPage} from 'next';
import Link from 'next/link'

const FirstPost: NextPage = () => {
    return (
        <div><h1>First Post</h1>
            <h1 className="title">
                <Link href="/"><a >link 点击这里</a></Link>
            </h1>
        </div>
    )
}
export default FirstPost;