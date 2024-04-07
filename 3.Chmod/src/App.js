import React from 'react';

export default function App() {
    return (
        <div className="App">
            <Chmod permission={"rwxrwxr-x"} answer={'775'} /> {/*775*/}
            <Chmod permission={"-r-w------"} answer={'600'} /> {/*600*/}
            <Chmod permission={"r-wr----r"} answer={'644'} /> {/*644*/}
            <Chmod permission={"-rwxrwxr-x"} answer={'775'} /> {/*775*/}
            <Chmod permission={"-r-x---r-x"} answer={'505'} /> {/*505*/}
            <Chmod permission={"-rw-rw-rw-"} answer={'666'} /> {/*666*/}
            <Chmod permission={"-r--r--r--"} answer={'444'} /> {/*444*/}
            <Chmod permission={"---x--x--x"} answer={'111'} /> {/*111*/}
            <Chmod permission={"-rw-------"} answer={'600'} /> {/*600*/}
            <Chmod permission={"-rw-rw-r--"} answer={'664'} /> {/*664*/}
        </div>
    );
}

const Chmod = (props) => {
    const { permission, answer } = props;

    function convert(permission) {
        let result = 0;

        for (let i = 0; i < permission.length; i++) {
            const char = permission[i];
            if (char === '-') {
                result += 0;
            } else if (char === 'r') {
                result += 4;
            } else if (char === 'w') {
                result += 2;
            } else if (char === 'x') {
                result += 1;
            }
        }
        return `${result} is ${answer === result ? 'true' : 'false'}`;
    }

    return (
        <>
            <p>
                {`[ ${permission} ] =  `}
                {convert(permission)}
            </p>
        </>
    );
};
