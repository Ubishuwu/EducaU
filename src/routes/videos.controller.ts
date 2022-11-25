import { RequestHandler } from 'express'
import video from './video';
import Video from './video'

export const createVideos:RequestHandler = async (req, res) => {
    const videoFound = await Video.findOne({url: req.body.url})

    if(videoFound)
        return res.status(301).json({message: 'La URL ya existe'}) 

    const video = new Video(req.body)
    const savedVideo = await video.save()
    res.json(savedVideo)
};

export const getVideos:RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find()
        return res.json(videos)
    } catch (error) {
        return res.json(error)
    }
};

export const getVideo:RequestHandler = async (req, res) => {
    const videoFound = await Video.findById(req.params.id)
    if(!videoFound)
        return res.status(204).json();
    return res.json(videoFound)
};

export const updateVideos:RequestHandler = async (req, res) => {
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!videoUpdated)
        return res.status(204).json();
    res.json(videoUpdated)
};

export const deleteVideos:RequestHandler = async (req, res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id)
    if(!videoFound)
        return res.status(204).json();
    return res.json(videoFound)
};