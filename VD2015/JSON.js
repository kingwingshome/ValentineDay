window.json = {
    "sprites": {
        "myFace_default": {
            "fill": "assets/My_Face.png",
            "size": {
                "width": 379,
                "height": 635
            },
            "opacity": 1,
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "radius": 0,
            "repeat_x": true,
            "repeat_y": true,
            "background_speed": {
                "x": 0,
                "y": 0
            },
            "anchorPoint": {
                "x": 0.501,
                "y": 0.501
            },
            "mirror": {
                "horizontal": 1,
                "vertical": 1
            },
            "imgSize": {
                "width": 379,
                "height": 635
            }
        },
        "yourFace_default": {
            "fill": "assets/Your_Face.png",
            "size": {
                "width": 217,
                "height": 416
            },
            "opacity": 1,
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "radius": 0,
            "repeat_x": true,
            "repeat_y": true,
            "background_speed": {
                "x": 0,
                "y": 0
            },
            "anchorPoint": {
                "x": 0.502,
                "y": 0.5
            },
            "mirror": {
                "horizontal": 1,
                "vertical": 1
            },
            "imgSize": {
                "width": 217,
                "height": 416
            }
        },
        "rabbit_default": {
            "fill": "assets/rabbit.png",
            "size": {
                "width": 1280,
                "height": 720
            },
            "opacity": 1,
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "radius": 0,
            "repeat_x": true,
            "repeat_y": true,
            "background_speed": {
                "x": 0,
                "y": 0
            },
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "mirror": {
                "horizontal": 1,
                "vertical": 1
            },
            "imgSize": {
                "width": 1280,
                "height": 720
            }
        },
        "name_default": {
            "fill": "assets/sign.png",
            "size": {
                "width": 1280,
                "height": 720
            },
            "opacity": 1,
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "radius": 0,
            "repeat_x": true,
            "repeat_y": true,
            "background_speed": {
                "x": 0,
                "y": 0
            },
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "mirror": {
                "horizontal": 1,
                "vertical": 1
            },
            "imgSize": {
                "width": 1280,
                "height": 720
            }
        },
        "heart_default": {
            "fill": "assets/heart.png",
            "size": {
                "width": 145,
                "height": 128
            },
            "opacity": 1,
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "radius": 0,
            "repeat_x": true,
            "repeat_y": true,
            "background_speed": {
                "x": 0,
                "y": 0
            },
            "anchorPoint": {
                "x": 0.503,
                "y": 0.5
            },
            "mirror": {
                "horizontal": 1,
                "vertical": 1
            },
            "imgSize": {
                "width": 145,
                "height": 128
            }
        }
    },
    "structure": {
        "structure": ["structure"],
        "scenes": ["sce_VD2015"],
        "objects": ["myFace", "yourFace", "rabbit", "heart", "name"],
        "animations": ["fadeOut", "fadeIn"],
        "sounds": [],
        "texts": [],
        "paths": [],
        "timelines": [],
        "scripts": []
    },
    "scenes": {
        "sce_VD2015": {
            "comment": "",
            "size": {
                "width": 1280,
                "height": 720
            },
            "speed": {
                "x": 0,
                "y": 0
            },
            "defaultLayer": "layer0",
            "activeLayer": "layer1",
            "prev_scene": "",
            "next_scene": "",
            "is25D": false,
            "background": "bg_1",
            "background_repeat": "no-repeat",
            "background_speed": {
                "x": 0,
                "y": 0
            },
            "minTimeDelta": 0.1,
            "layers": [{
                "id": "layer0",
                "sticky": false,
                "ignore25d": false,
                "hiddenAtStart": false,
                "lock": false,
                "expanded": true,
                "objects": []
            }, {
                "id": "layer1",
                "sticky": false,
                "ignore25d": false,
                "hiddenAtStart": false,
                "lock": false,
                "expanded": true,
                "objects": [{
                    "id": "rabbit",
                    "type": "rabbit",
                    "scale": {
                        "x": 1,
                        "y": 1
                    },
                    "rotation": 0,
                    "position": {
                        "x": 638,
                        "y": 356
                    },
                    "hiddenAtStart": false,
                    "extend": {},
                    "mirror": {
                        "horizontal": 1,
                        "vertical": 1
                    },
                    "zIndex": 0,
                    "isEqualScale": true
                }, {
                    "id": "heart",
                    "type": "heart",
                    "scale": {
                        "x": 1,
                        "y": 1
                    },
                    "rotation": 0,
                    "position": {
                        "x": 615,
                        "y": 484
                    },
                    "hiddenAtStart": false,
                    "extend": {},
                    "mirror": {
                        "horizontal": 1,
                        "vertical": 1
                    },
                    "zIndex": 0,
                    "isEqualScale": true
                }, {
                    "id": "myFace",
                    "type": "myFace",
                    "scale": {
                        "x": 1,
                        "y": 1
                    },
                    "rotation": 0,
                    "position": {
                        "x": 341,
                        "y": 388
                    },
                    "hiddenAtStart": false,
                    "extend": {},
                    "mirror": {
                        "horizontal": 1,
                        "vertical": 1
                    },
                    "zIndex": 0,
                    "isEqualScale": true
                }, {
                    "id": "yourFace",
                    "type": "yourFace",
                    "scale": {
                        "x": 1,
                        "y": 1
                    },
                    "rotation": 0,
                    "position": {
                        "x": 834,
                        "y": 354
                    },
                    "hiddenAtStart": false,
                    "extend": {},
                    "mirror": {
                        "horizontal": 1,
                        "vertical": 1
                    },
                    "zIndex": 0,
                    "isEqualScale": true
                }]
            }],
            "events": [{
                "type": ["create"],
                "actions": [{
                    "type": "'fadeIn'",
                    "comment": "",
                    "appliesTo": "id:'heart'",
                    "actionIndex": 0,
                    "disabled_action": false,
                    "method": "run_animation"
                }],
                "disabled_event": false,
                "comment": ""
            }]
        }
    },
    "backgrounds": {
        "bg_1": {
            "fill": "#ffffff",
            "size": {
                "width": 32,
                "height": 32
            },
            "anchorPoint": {
                "x": 0,
                "y": 0
            }
        }
    },
    "global": {
        "start_scene": "sce_VD2015",
        "displayFPS": false,
        "renderer": "gmx"
    },
    "objects": {
        "myFace": {
            "isButton": false,
            "parent": "no-parent",
            "comment": "",
            "events": [],
            "sprites": ["myFace_default"],
            "sprite": "myFace_default"
        },
        "yourFace": {
            "isButton": false,
            "parent": "no-parent",
            "comment": "",
            "events": [],
            "sprites": ["yourFace_default"],
            "sprite": "yourFace_default"
        },
        "rabbit": {
            "isButton": false,
            "parent": "no-parent",
            "comment": "",
            "events": [],
            "sprites": ["rabbit_default"],
            "sprite": "rabbit_default"
        },
        "heart": {
            "isButton": false,
            "parent": "no-parent",
            "comment": "",
            "events": [{
                "type": ["mousedown", "or", "touchstart"],
                "actions": [{
                    "type": "'fadeOut'",
                    "comment": "",
                    "appliesTo": "id:'rabbit'",
                    "actionIndex": 0,
                    "disabled_action": false,
                    "method": "run_animation"
                }, {
                    "x": 460,
                    "relative_x": false,
                    "y": 388,
                    "relative_y": false,
                    "speed": 200,
                    "relative_speed": false,
                    "comment": "",
                    "appliesTo": "id:'myFace'",
                    "actionIndex": 1,
                    "disabled_action": false,
                    "method": "move_to"
                }, {
                    "x": 700,
                    "relative_x": false,
                    "y": 354,
                    "relative_y": false,
                    "speed": 200,
                    "relative_speed": false,
                    "comment": "",
                    "appliesTo": "id:'yourFace'",
                    "actionIndex": 2,
                    "disabled_action": false,
                    "method": "move_to"
                }, {
                    "type": "'name'",
                    "id": "'name'",
                    "x": 640,
                    "y": 360,
                    "relative": false,
                    "zIndex": 0,
                    "comment": "",
                    "appliesTo": "this",
                    "actionIndex": 3,
                    "disabled_action": false,
                    "method": "instance_create"
                }, {
                    "x": 640,
                    "relative_x": false,
                    "y": 100,
                    "relative_y": false,
                    "comment": "",
                    "appliesTo": "this",
                    "actionIndex": 4,
                    "disabled_action": false,
                    "method": "jump_to"
                }],
                "disabled_event": false,
                "comment": ""
            }],
            "sprites": ["heart_default"],
            "sprite": "heart_default"
        },
        "name": {
            "isButton": false,
            "parent": "no-parent",
            "comment": "",
            "events": [],
            "sprites": ["name_default"],
            "sprite": "name_default"
        }
    },
    "animations": {
        "fadeOut": {
            "animation": {
                "loop": 1,
                "frames": [{
                    "anime": {
                        "Fade": {
                            "opacity": 1,
                            "relative": false
                        }
                    },
                    "duration": 0.1
                }, {
                    "anime": {
                        "Fade": {
                            "opacity": 0.01,
                            "relative": false
                        }
                    },
                    "duration": 0.8
                }]
            },
            "initFrameData": {
                "anime": {
                    "Scale": {
                        "x": 1,
                        "y": 1
                    },
                    "Move": {
                        "x": 0,
                        "y": 0
                    },
                    "Rotate": {
                        "angle": 0
                    },
                    "Fade": {
                        "opacity": 1
                    },
                    "Color": {
                        "color": "url(/admin/VD2015/assets/rabbit.png?rend=2345)"
                    }
                },
                "duration": 0.1
            },
            "initFrameIsEqualScale": true,
            "animationIsEqualScale": true,
            "selectObj": "rabbit"
        },
        "fadeIn": {
            "animation": {
                "loop": "forever",
                "frames": [{
                    "anime": {
                        "Fade": {
                            "opacity": 0.01,
                            "relative": false
                        }
                    },
                    "duration": 0.1
                }, {
                    "anime": {
                        "Fade": {
                            "opacity": 1,
                            "relative": false
                        }
                    },
                    "duration": 0.8
                }]
            },
            "initFrameData": {
                "anime": {
                    "Scale": {
                        "x": 1,
                        "y": 1
                    },
                    "Move": {
                        "x": 0,
                        "y": 0
                    },
                    "Rotate": {
                        "angle": 0
                    },
                    "Fade": {
                        "opacity": 0.01
                    },
                    "Color": {
                        "color": "url(/admin/VD2015/assets/heart.png?rend=2345)"
                    }
                },
                "duration": 0.1
            },
            "initFrameIsEqualScale": true,
            "animationIsEqualScale": true,
            "selectObj": "heart"
        }
    }
}