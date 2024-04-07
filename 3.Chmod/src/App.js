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

    function convert(input) {
        let result = '';
        let numericResult = '';

        for (let i = 0; i < input.length; i++) {
            const char = input[i];

            if (char === '-') {
                numericResult += '0';
            } else if (char === 'r') {
                numericResult += '4';
            } else if (char === 'w') {
                numericResult += '2';
            } else if (char === 'x') {
                numericResult += '1';
            }
        }
        result = calculateResult(numericResult)
        return `${result} is ${answer === result ? 'true' : 'false'}`;
    }

    function calculateResult(numberString) {
        let result = '';
        let currentNumber = 0;
        for (let i = 0; i < numberString.length; i++) {
            if (numberString[i] !== "0") {
                currentNumber += parseInt(numberString[i]);
            } else {
                if (currentNumber !== 0) {
                    result += JSON.stringify(currentNumber);
                    currentNumber = 0;
                }
            }

            if (numberString.length - 1 === i) {
                if (currentNumber !== 0) {
                    result += JSON.stringify(currentNumber);
                }
            }
        }
        return result
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
