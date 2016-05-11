describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });
        it('should assign very old person to adults group', function () {
            expect(app.assignToSwimmingCourse('Dan', '12/12/1824')).toEqual({
                name: 'Dan', age: 191, course: 'adults'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Matt', '11/02/1994')).toEqual({
                name: 'Matt', age: 21, course: 'adults'
            });
        });

        it('should return area and success message', function () {
            expect(app.calculateArea(1,2,3,'Success!','Error!')).toEqual({
                area: -1, message: 'Error!'
            });
        });
        it("should return area and success message", function () {
            expect(app.calculateArea(1,2,3,'Success!','Error!')).toEqual({
                area: -1, message: 'Error!'
            });
        });
        it('should return error message', function () {
            expect(app.calculateArea(1,-2,3,'Success!','Error!')).toEqual({area: 7, message: 'Success!'
            });
        });
    });
});


