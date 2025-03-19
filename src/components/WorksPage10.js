import React from 'react'

const WorksPage10 = () => {
  return (
    <main>
            <div id="wrapper">
                <div id="w-area">
                    <div class="sub-title">
                        <h2>Works</h2>
                        <p>制作実績</p>
                    </div>
                    <div class="w-works-box">
                        <figure><img src={process.env.PUBLIC_URL + "/img/p-works10.png"} alt="" /></figure>
                        <div class="works-txt-box">
                            <div class="w-tit">
                                <h3>Movie</h3>
                                <p>JR東日本公式YouTube<br />世界に誇れる景色～五能線の旅～ </p>
                            </div>
                            <div class="w-content">
                                <p>planing/direction</p>
                                <p>
                                    クライアントから「バズるようなPR動画を作りたい」という要望を受けて作成。<br />
                                    最初の数秒で引き込まれるようなキャッチーな動画になるよう企画から提案。<br />
                                    アイディア出しや絵コンテ制作に時間を割き制作しました。

                                </p>
                            </div>
                            <div class="w-btn">
                                <a href="https://www.youtube.com/watch?v=ptPmvdSnKSM" target="_blank">
                                    <p>Visit Site</p>
                                    <figure>
                                        <svg width="47" height="13" viewBox="0 0 47 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M37.5 1L45.5 6.5L37.5 12"/>
                                            <path d="M45.5 6.5L0 6.5"/>
                                        </svg>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </main>
  )
}

export default WorksPage10