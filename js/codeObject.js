let codeObject = {
    app:
        `
        <div class="elem  elem__firstLvl_one">
            
            <div class="pipe pipe__kzn_in pipe_effect"></div>
            <div class="level">
              <div class="level__title">
                с площадки промбазы 
              </div>  
            </div>
        </div>
        <div class="elem elem__firstLvl_two">
            <div class="valve valve_three"></div>
            <div class="walls__container">
                <div class="paramater__container_valve">
                    <label class="paramater__value_label" for="valveValue">P</label>
                    <input class="paramater__value" value="-9999.9" type="number" name="valveValue" id="valveValue" disabled>
                </div>
                <div class="walls"></div>
                <div class="pipe pipe__kzn pipe_effect"></div>
                <div class="valve"></div>
                <div class="valve valve_two"></div>
                <div class="pipe pipe_vertical pipe_effect"></div>
                <div class="trapdoor"></div>
                <div class="trapdoor_back"></div>
            </div>
            <div class="pipe pipe__kz pipe_effect"></div>
            <div class="pool__container">
                <div class="pool__title">OC6.01.03 -ЕП-1</div>
                
                
                
                <div class="pool">
                    <div class="pool__item pool__window">
                        <div class="pool__title pool__title_window">OC6.01.03-ЕН-1</div>
                        <div class="gear gear__effect"></div>
                        <div class="valveA"></div>
                        <div class="icon"></div>
                    </div>
                    <div class="pool__item ">
                        <div class="pool__item pool__item_scale">
                            <div class="scale">
                                <div class="scale__thumb">
                                    <div class="scale__track" data-value="20"></div>
                                </div>
                            </div>
                            <div class="scale__number">
                                <div class="scale__numberValue">+2000</div>
                                <div class="scale__numberValue">+1000</div>
                                <div class="scale__numberValue">+0</div>
                            </div>
                        </div>
                        <div class="paramater__container paramater__container_pool">
                            <label class="paramater__value_label" for="poolValue">L</label>
                            <input class="paramater__value" value="-9999.9" type="number" name="poolValue" id="poolValue" disabled>
                    </div>
                    </div>
                    

                </div>
            </div>
        </div>
        <div class="elem elem__firstLvl elem__firstLvl_three">
            <div class="pipe pipe__kz_out pipe_effect"></div>
            <div class="level level_out">
              <div class="level__title">
                в резервуары производственно-дождевых сточных вод Е-2-1.2   
              </div>               
            </div>
            <button id="work" class="btn" data-props="work" data-action="click">Симмуляция работы</button> 

        </div>
    </div>    
`,
    
}
export default codeObject;