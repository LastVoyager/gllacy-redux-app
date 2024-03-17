import { Fragment } from 'react';

import classes from './MainCatalog.module.css';

function MainCatalog  () {
  return (
    <main>
      <div className={classes.mainContainer}>
        <section className={classes.filterContainer}>
          <div className={classes.pageNavigation}>
            <a href="index.html">Главная</a>
            <span></span>
            <a href="catalog.html">Каталог</a>
            <span></span>
            <a href="catalog.html">Сливочное</a>
          </div>
          <h2>Сливочное мороженное</h2>
          <div className={classes.sortContainer}>
            <div className={classes.upperSortStrip}>
              <div className={classes.sort}>
                <p>Сортировка:</p>
                <form>  
                  <span className={classes.triangle}></span>
                  <select>  
                    <option value = "1">по популярности</option>   
                    <option value = "2">акционньіе предложения</option>    
                    <option value = "3">без сахара</option>    
                    <option value = "4">с доставкой</option>  
                  </select>  
                </form>  
              </div>
              <div className={classes.sortPrise}>
                <p>Цена:</p>
                <div className={classes.priceRangeSlider}>
                  <p className={classes.rangeValue}>
                    <input type="text" id="amount" readOnly></input>
                  </p>
                  <div id="slider-range" className={classes.rangeBar}></div>
                </div>
              </div>
              <div className={classes.sortFat}>
                <p>Жирность:</p>
                <form className={classes.radioButton}>
                  <input type="radio" className={classes.sliderPoint1} name="slider" defaultChecked></input>
                  <span></span>
                  <input type="radio" className={classes.sliderPoint2} name="slider"></input>
                  <span></span>
                  <input type="radio" className={classes.sliderPoint3} name="slider"></input>
                  <span></span>
                  <input type="radio" className={classes.sliderPoint4} name="slider"></input>
                  <span></span>
                </form>
                <div className={classes.fatMeasure}>
                  <p>0%</p>
                  <p>до 10%</p>
                  <p> до 30%</p>
                  <p>вьіше 30%</p>
                </div>
              </div>
            </div>
            <div className={classes.lowerSortStrip}>
              <p>Наполнители:</p>
              <div className={classes.sortFiller}>
                <form className={classes.chboxButton}>
                  <input type="checkbox" className={classes.checkboxPoint1} name="slider"></input>
                  <span></span>
                  <input type="checkbox" className={classes.checkboxPoint2} name="slider"></input>
                  <span></span>
                  <input type="checkbox" className={classes.checkboxPoint3} name="slider"></input>
                  <span></span>
                  <input type="checkbox" className={classes.checkboxPoint4} name="slider"></input>
                  <span></span>
                  <input type="checkbox" className={classes.checkboxPoint5} name="slider"></input>
                  <span></span>
                </form>
                <form><button className={classes.sortFillerButton}>Применить</button></form>
                <div className={classes.fillerMeasure}>
                  <p>шоколадньіе</p>
                  <p>сахарньіе присьіпки</p>
                  <p>фруктьі</p>
                  <p>сиропьі</p>
                  <p>джемьі</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={classes.catalog}>
          <div className={classes.paginationContainer}>
            <ul className={classes.pagination}>
              <li className={`${classes.arrowLeft} ${classes.noWay}`}></li>
              <li>
                <ul className={classes.pageList}>
                  <li className={`${classes.page} ${classes.pageActive}`}><a className="page-number number-active" href="#">1</a></li>
                  <li className={classes.page}><a className={classes.pageNumber} href="#">2</a></li>
                  <li className={classes.page}><a className={classes.pageNumber} href="#">3</a></li>
                  <li className={classes.page}><a className={classes.pageNumber} href="#">4</a></li>
                  <li className={classes.page}><a className={classes.pageNumber} href="#">5</a></li>
                </ul>
              </li>
              <li className={classes.arrowRight}></li>
            </ul>
          </div>
        </section>
      </div>
    </main>  
    //<Fragment><p className={classes.catalog}>CATALOG</p></Fragment>
  );
}

export default MainCatalog;

