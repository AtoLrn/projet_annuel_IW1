class Select {
    constructor(name, selector, placeholder, options) {
        this.selector = selector;
        this.name = name;
        this.options = options || [];
        this.placeholder = placeholder;
        this.selection = [] 
        this.search = ""

        this.init();
    }
    
    init() {
        this.select = $(this.selector);
        this.insertShowCaseDiv()
        this.insertHiddenInput()
        this.insertInput()
        this.insertSearchDiv()
    }

    insertShowCaseDiv() {
        const showcase = $("<div/>").addClass("showcase")
        this.showcase = showcase
        this.select.append(showcase);
    }

    insertSearchDiv() {
        const searchDiv = $("<div/>").addClass("search hidden")
        this.options.forEach((option) => {
            const section = $("<section/>")
            section.click(this.handleClick.bind(this, option))
            section.append($(`<span>${option}</span>`))
            section.append($("<span>X</span>"))
            searchDiv.append(section)
        })
        this.searchDiv = searchDiv
        this.select.append(searchDiv);
    }

    insertHiddenInput() {
        const hiddenInput = $("<input/>").attr("type", "hidden").attr("name", this.name);
        this.hiddenInput = hiddenInput
        this.select.append(hiddenInput);
    }

    insertInput() {
        const input = $("<input/>").addClass("input input-pink").attr("type", "text").attr("placeholder", this.placeholder);
        input.on( "input", this.handleChange.bind(this) )
        input.focus(this.handleFocusIn.bind(this))
        input.focusout(this.handleFocusOut.bind(this))
        this.input = input
        this.select.append(input);
    }


    reRender() {
        this.hiddenInput.val(this.selection)
        this.showcase.empty()
        this.selection.forEach((item) => {
            const section = $("<section/>")
            section.click(this.handleRemove.bind(this, item))
            section.append($(`<span>${item}</span>`))
            section.append($("<span>X</span>").addClass("remove"))
            this.showcase.append(section)
        })

        
        this.searchDiv.empty()
        this.options.filter(item => item.length == 0 || item.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())).forEach((option) => {
            const section = $("<section/>")
            section.click(this.handleClick.bind(this, option))
            section.append($(`<span>${option}</span>`))
            section.append($("<span>X</span>"))
            this.searchDiv.append(section)
        })
        
    }

    handleRemove(value) {
        this.selection = this.selection.filter(item => item !== value )
        this.reRender()
    }

    handleClick(value) {
        this.handleFocusIn()
        this.selection.push(value)
        this.selection = [...new Set(this.selection)]
        this.reRender()
    }

    handleChange() {
        console.log("search")
        const value = this.input.val();
        this.search = value;
        this.reRender()
    }

    handleFocusIn () {
        this.searchDiv.removeClass("hidden")
    }

    handleFocusOut (s) {
        console.log(s)
        setTimeout(() => {
            this.searchDiv.addClass("hidden")
        }, 500)

    }
}
