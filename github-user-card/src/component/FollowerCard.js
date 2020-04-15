import React from 'react';


function FollowerCard (props) {
    console.log(props)
    const data = props.followerDataSet;

    const followerLogins = data.map((follower) => {
        return(
            <div key={follower.id}>
                <p><a href={follower.html_url}>{follower.login} </a></p>
                <img src={follower.avatar_url}/>
            </div>
        );
    })

    return(
        <div>
            <h3>{followerLogins} </h3>
        </div>
    );
};

export default FollowerCard