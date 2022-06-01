import React from 'react'
import './ExclusiveWorks.css'
import miracles from '../../img/miracles.png'
import bhajans from '../../img/bhajans.png'
import book from '../../img/book.png'
import Card from '../Card/Card'


function ExclusiveWorks() {
  return (
    <div className="ExclusiveWorks">

        <div className="cards">
            <div className="card">
                 <Card
                    emoji = {miracles}
                    heading = {"Mahima Yamuna"}
                    detail = {"Mahima Yamuna (Yamuna River of Miracles) is a collection of miracles experienced by the devotees of Swami. Swami says that miracles are the proof for existence of unimaginable God and are essential for the initial attraction of the attention of the devotees."}
                  />
            </div>

            <div className="card">
                 <Card
                    emoji = {bhajans}
                    heading = {"Bhakti Ganga"}
                    detail = {"Bhakti Ganga (Ganga River of Devotion) is a collection of several devotional songs (Bhajans) on various forms of God, spontaneously composed and sung by Swami. Swami says that bhajans are instrumental for attaining devotion towards God or Bhakti Yoga."}/>
            </div>

            <div className="card">
                 <Card
                    emoji = {book}
                    heading = {"Jnana Saraswati"}
                    detail = {"Jnana Saraswati (Saraswati River of spiritual knowledge) is a compilation of thousands of discourses given by Swami. The discourse topics include – Unification of religions, Unification of Vedantic philosophies, Correlation of Science and Spirituality, etc."}/>
            </div>

        </div>
    </div>
  )
}

export default ExclusiveWorks