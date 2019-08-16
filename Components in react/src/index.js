import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails author="sam"
                    timeAgo="Today at 6:00 pm"
                    content="Nice blog post"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetails author="jane"
                    timeAgo="Today at 5:00 pm"
                    content="I like the writing"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author="sdas"
                    timeAgo="Today at 4:00 pm"
                    content="it was great blog"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));