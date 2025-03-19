import React from 'react'

const WorksPage9 = () => {
  return (
    <main>
            <div id="wrapper">
                <div id="w-area">
                    <div class="sub-title">
                        <h2>Works</h2>
                        <p>制作実績</p>
                    </div>
                    <div class="w-works-box">
                        <figure><img src={process.env.PUBLIC_URL + "/img/p-works09.png"} alt="" /></figure>
                        <div class="works-txt-box">
                            <div class="w-tit">
                                <h3>Website</h3>
                                <p>JR東日本 御朱印長キャンペーンLP </p>
                            </div>
                            <div class="w-content">
                                <p>design/coding</p>
                                <p>
                                    ポスター制作が先行していた案件でしたので、そのイメージと乖離しないよう注意して制作しました。<br />
                                    クライアント側でサイトアップする際にルールがあったため、滞りなくアップできるようスケジュール管理を心がけました。
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                
            </div>
        </main>
  )
}

export default WorksPage9