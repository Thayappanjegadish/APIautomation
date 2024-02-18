// It is a linear DS where each node contains data and a pointer to the next node in chain


const list = {
    head: {
        value: 6,
        next: {
            value: 10,                                         
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null	
                    }
                }
            }
        }
    }

    

    console.log(list.head.next)

    console.log(list.size())
