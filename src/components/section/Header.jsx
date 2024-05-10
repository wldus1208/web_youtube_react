import React from 'react'
import { CiApple, CiMoneyBill, CiCoins1, CiStar, CiDark, CiMedal, CiPlane, CiFaceFrown } from "react-icons/ci";
import { AiFillGithub, AiOutlineCodepen, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header_logo'>
                <a href='/'>
                    <em aria-hidden='true'></em>
                    <span>webs<br />youtube</span>
                </a>
            </h1>
            <nav className='header_menu'>
                <ul className='menu '>
                    <li><a href='/today'><CiMoneyBill />추천영상</a></li>
                    <li><a href='/developer'><CiCoins1 />추천 개발자</a></li>
                    <li><a href='/gisa'><CiFaceFrown />정보처리기사</a></li>
                    <li><a href='/test'><CiMedal />코딩테스트</a></li>
                    <li><a href='/n3'><CiStar />JLPT N3</a></li>
                    <li><a href='/n2'><CiDark />JLPT N2</a></li>
                    <li><a href='/japan'><CiPlane />일본어 회화</a></li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>webstoryboy</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/Highlight'>music</a>
                    </li>
                </ul>
            </nav>
            <div className='header_sns'>
            <ul>
                    <li>
                        <a href='https://github.com/wldus1208' rel='noopener noreferrer'>
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href='https://velog.io/@wl00dus/posts' rel='noopener noreferrer'>
                            <SiVelog />
                        </a>
                    </li>
                    <li>
                        <a href='https://codepen.io/' rel='noopener noreferrer'>
                            <AiOutlineCodepen />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/' rel='noopener noreferrer'>
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header