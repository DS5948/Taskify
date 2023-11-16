const mongoose = require('mongoose');

const reminderSchema = mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    reminderMsg: { type: String, required: true },
    remindAt: { type: String, required: true },
    isReminded: { type: Boolean, required: true},
}, {
    timestamps: true,
});

const Reminder = mongoose.model("reminder", reminderSchema);

module.exports = Daily;