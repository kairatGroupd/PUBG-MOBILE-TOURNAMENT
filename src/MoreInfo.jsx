import React from 'react'
import './MoreInfo.css'
// import RoomVid from "./images/pubgmobileroom.mp4"
import { motion } from "framer-motion"

function MoreInfo() {
    return (
        <div className="more-inf">
            <div  className="more-info">
            <div className="Rules">
                <div className="gen-rules">
                <h1 className="headers">ПРАВИЛА (ПРОЧИТАЙТЕ ВНИМАТЕЛЬНО)</h1>
                <br/>  
                <span>Основные правила</span>
                    <ol>
                        <li>Настоящие Официальные правила устанавливают правила турнирной игры, включая правила, регулирующие допуск игроков, структуру турнира, структуру набранных очков, присуждение призов и поведение игроков.</li>
                        <li>Прочтите и ознакомьтесь с настоящими Официальными правилами, прежде чем участвовать в турнире. Вы должны согласиться с этими Официальными правилами, чтобы участвовать в турнире, и вы должны соблюдать эти Официальные правила, чтобы сохранить право участвовать в Турнире и получать призы. Все это объясняется ниже.</li>
                        <li>Все матчи турнира разрешено транслировать онлайн с помощью PUBG Mobile.</li>
                        <li>PUBG Mobile имеет право принимать решения вне или даже вопреки своду правил в особых случаях, чтобы гарантировать честную игру.</li>
                        <li>Для начала игр необходимо не менее 75% участников.</li>
                    </ol>
                </div>
                
                <div className="rule-settings">
                     <h2>НАСТРОЙКИ ИГРЫ</h2>
                   <ul>
                       <li>🏈 Команда – Соло</li>
                       <li>🌍 Сервер — Северная Америка</li>
                       <li>🗺 Карта — Санок</li>
                       <li>📳 Режим - Классический TPP</li>
                   </ul>
                    
                </div>

                <div className="tourn-rules">
                    <h2>ПРАВИЛА ТУРНИРА</h2>
                    <ol>
                        <li>Допускаются только первые 500 регистраций.</li>
                        <li>Разрешены только мобильные телефоны, никаких эмуляторов.</li>
                        <li>Объединение в команду с другими игроками приведет к постоянному запрету на участие в матче и может привести к запрету на участие в турнире.</li>
                        <li>Игроки должны использовать имя пользователя PUBG Mobile/IGN/тег игрока, указанные в регистрационной форме для участия в турнире. О любом изменении имени пользователя следует сообщать в службу поддержки не менее чем за 4 часа до начала матча.</li>
                        <li>Никогда не сообщайте код комнаты незарегистрированным игрокам.</li>
                        <li>Незарегистрированные игроки и игроки, не оплатившие вступительный взнос, не допускаются к участию в турнире.</li>
                        <li>Все игроки должны установить новейшую версию игры, чтобы принять участие в онлайн-турнире PUBG. Любое обновление необходимо установить до начала турнира, поэтому задержки будут минимальными.</li>
                        <li>Игрокам не разрешается использовать какие-либо хаки или любое другое программное обеспечение/инструмент, дающее им неправомерное преимущество.</li>
                        <li>Игрокам не разрешается использовать какие-либо сторонние приложения, которые улучшают или изменяют игровой процесс по умолчанию.</li>
                        <li>Всем игрокам рекомендуется записывать весь матч, включая мобильную консоль с другим записывающим устройством. Игроки должны отключить функцию микрофона, а также включить динамик и изменить голосовой канал на Все в случае любого срочного объявления от зрителя и организатора.</li>
                        <li>Все игроки должны предоставить свои собственные предметы первой необходимости для турнира, например: Wi-Fi, мобильные данные, телефон, последнюю версию игры и т. д.</li>
                        <li><strong>Нет возврата после начала матчей</strong></li>
                    </ol>
                </div>
            </div>

            <div className="description">
                <div>
                    <h1 className="headers">ОПИСАНИЕ (ПРОЧИТАЙТЕ ВНИМАТЕЛЬНО)</h1>
                    <div className="desc-reg">
                        <span>Как зарегистрироваться</span>
                        <ul>
                            <li>Зарегистрируйтесь на турнир, используя форму, представленную с помощью большой кнопки регистрации ниже.</li>
                            <li>Заполните форму, указав всю правильную информацию. (ПРАВИЛЬНЫЙ НОМЕР ТЕЛЕФОНА И АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ ВАЖНЫ!!!)</li>
                            <li>После отправки регистрационной формы вы получите уведомление по электронной почте от gamerzallure@gmail.com с доступными способами оплаты.</li>
                            <li>Способы оплаты доступны: О!Деньги, Мбанк, Оптима, TYVCoin и МегаПей.</li>
                            <li>После того, как вы успешно произвели платеж, отправьте снимок экрана вместе с идентификатором игрока / тегом игрока, который использовался для регистрации, на gamerzallure@gmail.com.</li>
                            <li>Крайний срок регистрации – 15 ОКТЯБРЯ 2020 ГОДА.</li>
                        </ul>
                    </div>
                </div>

                <div className="join-room">
                    {/* <h2>How to join room</h2>
                    <div className="room-vid-cont">
                        <video className="room-vid" controls src={RoomVid} type="video/mp4"></video>
                    </div>
                    <br/> */}

                    <div>
                    <h2>Игра</h2>
                        <ul>
                            <li>Регистрация на турнир. Обратите внимание, что окно Check-In открывается за 15 минут до начала каждого турнира.</li>
                            <li>Присоединяйтесь к игровой комнате Информация об игровой комнате будет отправлена ​​участникам по электронной почте и SMS за 15 минут до начала игры. Если вам нужна помощь, обратитесь в службу поддержки.</li>
                            <li>Играйте в матч Теперь вы готовы играть в свою игру. Соблюдайте правила, чтобы обеспечить честную игру.</li>
                            <li>Будет сыграна серия из 6 матчей. Первые 5 матчей будут сгруппированы из AE одновременно - (ОДНОВРЕМЕННО) или один за другим в зависимости от количества зарегистрировавшихся игроков.</li>
                            <li>Каждая группа будет состоять из 100 игроков.</li>
                            <li>20 лучших игроков каждой группы проводят 6-й и последний матч.</li>
                            <li>Игроки, занявшие 1, 2 и 3 места в последнем матче, получат приз.</li>
                        </ul>
                    </div>

                    <div className="prize">
                        <h2>Призы</h2>
                        <div className="prize-info">
                            <ul className="prize-list">
                                <li>1 место ➡ <strong><span>5000 сом</span></strong> </li>
                                <li>2 место ➡ <strong><span>3000 сом</span></strong> </li>
                                <li>3 место ➡ <strong><span>2000 сом</span></strong></li>
                                <li>Для игроков, выигравших призы, денежные призы будут отправлены выбранным способом оплаты в течение 48 часов.</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
            <div className="register-btn-cont">
                <a className="register-btn" href="https://forms.gle/9BUwxaHKdKUyUyx8A">Регистрация</a>
            </div>
        </div>
    )
}

export default MoreInfo
