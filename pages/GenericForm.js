// Approach which allows Forms filling. Not done yet.
define(function (require) {
    /**
     *
     * @param leadfoot/Element element
     * @constructor
     */
    function GenericForm(element) {
        this.element = element;
    }

    //var url = 'https://zanox-marketplace.oleksandrg.dev.affiliatewindow.com';

    GenericForm.prototype = {
        constructor: GenericForm,


        /**
         *
         * @param values
         */
        fillWithValues: function (values) {

            Object.keys(values).forEach(function (id) {
                this
                    .element
                    .findById(id)
                    .click()
                    .pressKeys(values[id]);
            });

        }

        // …additional page interaction tasks…
    };

    return GenericForm;
});