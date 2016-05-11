describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 21, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'adults'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Andrew', '10/06/2008')).toEqual({
                name: 'Andrew', age: 7, course: 'kids'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.calculateArea(5, 9, 7, 'Well done!', 'Try again')).toEqual({
                area: -26, message: 'Try again'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.calculateArea(5, 9, 7, 'Well done!', 'Try again')).toEqual({
                area: 8, message: 'Try again'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.calculateArea(5, 9, 7, 'Well done!', 'Try again')).toEqual({
                area: -26, message 'Try again'
            });
        });
    });
});


