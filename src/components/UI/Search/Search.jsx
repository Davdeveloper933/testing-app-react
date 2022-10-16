import styles from './Search.module.scss'
import {ReactComponent as SearchLogo} from '../../../img/icons/search.svg'
import {ReactComponent as SearchClose} from '../../../img/icons/close.svg'
import React, { useState } from 'react'
import {CSSTransition} from 'react-transition-group'

const Search = () => {
    const nodeRef = React.useRef(null)
    const [toggle, setToggle] = useState(false);
    const toggler = () => {
        toggle ? setToggle(false): setToggle(true);
    }
    return (
        <div className={styles.searchUI}>
            {!toggle &&
                            <CSSTransition
                            nodeRef={nodeRef}
                            in={toggle}
                            appear={true}
                            timeout={300}
                            classNames="example"
                        > 
            <button ref={nodeRef} className={styles.search__btn} onClick={toggler}>
                <SearchLogo />
            </button>
            </CSSTransition>
            }

            {toggle && 
                <CSSTransition
                    nodeRef={nodeRef}
                    in={toggle}
                    appear={true}
                    timeout={300}
                    classNames="example"
                >
                    <div ref={nodeRef} className={styles.searchOpened}>
                        <input type="text" placeholder='Search' />
                        <button className={styles.search__closeicon}>
                            <SearchClose onClick={toggler} />
                        </button>
                    </div>
                </CSSTransition>
            }
            
        </div>
    );
}

export default Search;