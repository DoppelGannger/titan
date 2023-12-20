
let data = {

    valveValue: 0,
    poolValue: 0,


    simulationWork: () => {

        let param = document.querySelectorAll('.paramater__value');

        

        param.forEach((e) => {

            setInterval(() => {
                let newData = parseInt((Math.random() * (1990 - 0) + 0) * 100) / 100;                
                
                if (newData > data[`${e.id}`]) {
                    let update = setInterval(function () {
                        if (data[`${e.id}`] > newData) {
                            
                            data.setState(newData)
                            clearInterval(update);
                        } else {
                            document.querySelector(`#${e.id}`).value = data[`${e.id}`];
                        };
                        data[`${e.id}`] = data[`${e.id}`] + 1;
                        
                    }, 1);
                } else {
                    let update = setInterval(function () {
                        if (data[`${e.id}`] < newData) {                            
                            data.setState(newData)
                            clearInterval(update);
                        } else {
                            document.querySelector(`#${e.id}`).value = data[`${e.id}`];
                        };
                        data[`${e.id}`] = data[`${e.id}`] - 1;                        
                    }, 0.5);

                }              

            }, 5000)
        })
    },

    setState: (newData) => {
        let scaleTrackUpdate = document.querySelector('.scale__track');           
        
        if (newData/2000*100 < 20) {
            scaleTrackUpdate.style.background = `red`;
            document.querySelector('.icon').classList.add('icon_danger');
            document.querySelector('.pipe_vertical').classList.add('pipe_effect_danger');
            document.querySelector('.pipe__kzn').classList.add('pipe_effect_danger')
            

        } else if (newData/2000*100 > 90) { 
            scaleTrackUpdate.style.borderRadius = `10px`;

        } else {
            scaleTrackUpdate.style.borderRadius = `0 0 10px 10px`;
            scaleTrackUpdate.style.background = `yellow`;
            document.querySelector('.icon').classList.remove('icon_danger');
            document.querySelector('.pipe_vertical').classList.remove('pipe_effect_danger');
            document.querySelector('.pipe__kzn').classList.remove('pipe_effect_danger')        
        }
        scaleTrackUpdate.style.height = `${newData/2000*100}%`;

    },
}

export default data;