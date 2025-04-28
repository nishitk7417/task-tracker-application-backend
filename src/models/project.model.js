// models/Project.js
import mongoose, {Schema} from 'mongoose';

const projectSchema = new Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    tasks: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Task' 
    }]
});

export const Project = mongoose.model('Project', projectSchema);
