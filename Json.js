{
    "interactionModel": {
        "languageModel": {
            "invocationName": "comic verse",
            "intents": [
                {
                    "name": "AMAZON.CancelIntent",
                    "samples": [
                        "exit"
                    ]
                },
                {
                    "name": "AMAZON.HelpIntent",
                    "samples": []
                },
                {
                    "name": "AMAZON.StopIntent",
                    "samples": [
                        "stop comic verse",
                        "exit from here",
                        "exit from comic verse",
                        "exit"
                    ]
                },
                {
                    "name": "AMAZON.NavigateHomeIntent",
                    "samples": []
                },
                {
                    "name": "getDefIntent",
                    "slots": [
                        {
                            "name": "name",
                            "type": "nameSlotType"
                        }
                    ],
                    "samples": [
                        "what is {name}"
                    ]
                },
                {
                    "name": "getCastIntent",
                    "slots": [
                        {
                            "name": "role",
                            "type": "roleSlotType"
                        }
                    ],
                    "samples": [
                        "who plays the character of {role}",
                        "character of {role} played by whom",
                        "who plays the role of {role}"
                    ]
                },
                {
                    "name": "getWhoIntent",
                    "slots": [
                        {
                            "name": "who",
                            "type": "whoSlotType"
                        }
                    ],
                    "samples": [
                        "who is {who}"
                    ]
                }
            ],
            "types": [
                {
                    "name": "nameSlotType",
                    "values": [
                        {
                            "name": {
                                "value": "shield"
                            }
                        },
                        {
                            "name": {
                                "value": "infinity stones"
                            }
                        },
                        {
                            "name": {
                                "value": "marvel cinematic universe"
                            }
                        },
                        {
                            "name": {
                                "value": "Marvel comics"
                            }
                        },
                        {
                            "name": {
                                "value": "Avengers"
                            }
                        },
                        {
                            "name": {
                                "value": "MCU"
                            }
                        }
                    ]
                },
                {
                    "name": "roleSlotType",
                    "values": [
                        {
                            "name": {
                                "value": "hawk eye"
                            }
                        },
                        {
                            "name": {
                                "value": "nick fury"
                            }
                        },
                        {
                            "name": {
                                "value": "captain marvel"
                            }
                        },
                        {
                            "name": {
                                "value": "iron man"
                            }
                        },
                        {
                            "name": {
                                "value": "thor"
                            }
                        },
                        {
                            "name": {
                                "value": "hulk"
                            }
                        },
                        {
                            "name": {
                                "value": "captain america"
                            }
                        },
                        {
                            "name": {
                                "value": "black widow"
                            }
                        },
                        {
                            "name": {
                                "value": "war machine"
                            }
                        },
                        {
                            "name": {
                                "value": "doctor strange"
                            }
                        },
                        {
                            "name": {
                                "value": "spider man"
                            }
                        },
                        {
                            "name": {
                                "value": "black panther"
                            }
                        },
                        {
                            "name": {
                                "value": "gamora"
                            }
                        },
                        {
                            "name": {
                                "value": "nebula"
                            }
                        },
                        {
                            "name": {
                                "value": "loki"
                            }
                        },
                        {
                            "name": {
                                "value": "vision"
                            }
                        },
                        {
                            "name": {
                                "value": "scarlet witch"
                            }
                        },
                        {
                            "name": {
                                "value": "falcon"
                            }
                        },
                        {
                            "name": {
                                "value": "winter soldier"
                            }
                        },
                        {
                            "name": {
                                "value": "heimdall"
                            }
                        },
                        {
                            "name": {
                                "value": "okoye"
                            }
                        },
                        {
                            "name": {
                                "value": "eitri"
                            }
                        },
                        {
                            "name": {
                                "value": "wong"
                            }
                        },
                        {
                            "name": {
                                "value": "mantis"
                            }
                        },
                        {
                            "name": {
                                "value": "drax"
                            }
                        },
                        {
                            "name": {
                                "value": "groot"
                            }
                        },
                        {
                            "name": {
                                "value": "rocket"
                            }
                        },
                        {
                            "name": {
                                "value": "pepper potts"
                            }
                        },
                        {
                            "name": {
                                "value": "collector"
                            }
                        },
                        {
                            "name": {
                                "value": "thanos"
                            }
                        },
                        {
                            "name": {
                                "value": "star lord"
                            }
                        },
                        {
                            "name": {
                                "value": "on set rocket"
                            }
                        },
                        {
                            "name": {
                                "value": "secretary of state thaddeus ross"
                            }
                        },
                        {
                            "name": {
                                "value": "shuri"
                            }
                        },
                        {
                            "name": {
                                "value": "on set groot"
                            }
                        },
                        {
                            "name": {
                                "value": "ebony maw"
                            }
                        },
                        {
                            "name": {
                                "value": "proxima midnight"
                            }
                        },
                        {
                            "name": {
                                "value": "corvus glaive"
                            }
                        },
                        {
                            "name": {
                                "value": "funny old man"
                            }
                        },
                        {
                            "name": {
                                "value": "mbaku"
                            }
                        },
                        {
                            "name": {
                                "value": "ayo"
                            }
                        },
                        {
                            "name": {
                                "value": "friday"
                            }
                        },
                        {
                            "name": {
                                "value": "on set proxima midnight"
                            }
                        },
                        {
                            "name": {
                                "value": "ned"
                            }
                        },
                        {
                            "name": {
                                "value": "cindy"
                            }
                        },
                        {
                            "name": {
                                "value": "sally"
                            }
                        },
                        {
                            "name": {
                                "value": "tiny"
                            }
                        },
                        {
                            "name": {
                                "value": "young gamora"
                            }
                        },
                        {
                            "name": {
                                "value": "gamorass mother"
                            }
                        },
                        {
                            "name": {
                                "value": "red skull"
                            }
                        },
                        {
                            "name": {
                                "value": "secretary ross aide"
                            }
                        },
                        {
                            "name": {
                                "value": "doctor strange double"
                            }
                        },
                        {
                            "name": {
                                "value": "thanos reader"
                            }
                        },
                        {
                            "name": {
                                "value": "teenage groot reader"
                            }
                        },
                        {
                            "name": {
                                "value": "jabari warrior"
                            }
                        },
                        {
                            "name": {
                                "value": "jack rollins"
                            }
                        },
                        {
                            "name": {
                                "value": "dora milage"
                            }
                        },
                        {
                            "name": {
                                "value": "maria hill"
                            }
                        },
                        {
                            "name": {
                                "value": "jogger"
                            }
                        },
                        {
                            "name": {
                                "value": "pedestrian"
                            }
                        },
                        {
                            "name": {
                                "value": "worker"
                            }
                        },
                        {
                            "name": {
                                "value": "asgardian"
                            }
                        },
                        {
                            "name": {
                                "value": "student"
                            }
                        },
                        {
                            "name": {
                                "value": "citizen"
                            }
                        }
                    ]
                },
                {
                    "name": "whoSlotType",
                    "values": [
                        {
                            "name": {
                                "value": "hulk"
                            }
                        }
                    ]
                }
            ]
        }
    }
}