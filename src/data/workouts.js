export const workouts = [
    {
        id: 1,
        title: "Hypertrophic Dominance Protocol",
        slug: "hypertrophic-dominance-protocol",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400",

        meta: {
            days: 5,
            goal: "Building Muscle",
            muscle: "Full Body",
            equipment: "Full Gym",
            level: "Intermediate",
            author: "Apex Team",
            rating: 4.8,
            reviews: 342
        },

        description: `
      <p><strong>The Philosophy:</strong> The Hypertrophic Dominance Protocol is built on the principle of progressive mechanical tension combined with metabolic stress. By manipulating training variables across two distinct phases, this program maximizes muscle protein synthesis while preventing neural fatigue. The foundation phase emphasizes neuromuscular adaptation and technical mastery, while the intensity phase pushes volume to stimulate maximal hypertrophy through cellular swelling and metabolic accumulation.</p>
      <br/>
      <p><strong>Who is this for?</strong> This program is designed for intermediate lifters who have established proper movement patterns and are ready to break through plateaus. Ideal for those who can commit to 5 training days per week and have access to a fully equipped gym. If you've been training consistently for 12+ months and want to add serious muscle mass, this protocol will take you to the next level.</p>
      <br/>
      <p><strong>Phase Breakdown:</strong></p>
      <ul>
        <li><strong>Phase 1 (Foundation):</strong> Focus on compound movements with moderate volume (8-12 reps) to build structural strength and prime the nervous system. This phase establishes the movement quality necessary for the high-intensity work ahead.</li>
        <li><strong>Phase 2 (Hypertrophy Peak):</strong> Volume increases significantly with supersets, drop sets, and time-under-tension protocols. Rep ranges shift to 10-15 to maximize metabolic stress and cellular adaptation for peak muscle growth.</li>
      </ul>
    `,

        schedule: [
            {
                phaseName: "Phase 1: Foundation",
                duration: "Est. 55 min",
                exercises: [
                    {
                        id: 101,
                        name: "Barbell Back Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 4,
                        reps: "8-10",
                        note: "Control the eccentric phase for 3 seconds, explosive concentric."
                    },
                    {
                        id: 102,
                        name: "Incline Barbell Press",
                        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300",
                        sets: 4,
                        reps: "10-12",
                        note: "Maintain scapular retraction throughout the movement."
                    },
                    {
                        id: 103,
                        name: "Romanian Deadlift",
                        image: "https://images.unsplash.com/photo-1526403646408-57b94dc15399?w=300",
                        sets: 4,
                        reps: "10-12",
                        note: "Focus on hamstring stretch at the bottom position."
                    },
                    {
                        id: 104,
                        name: "Weighted Pull-Ups",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "8-10",
                        note: "Full range of motion, chin over bar at the top."
                    },
                    {
                        id: 105,
                        name: "Standing Overhead Press",
                        image: "https://images.unsplash.com/photo-1583454156395-6bd7b7f9f1c6?w=300",
                        sets: 3,
                        reps: "10-12",
                        note: "Engage core to prevent lumbar hyperextension."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Hypertrophy Peak",
                duration: "Est. 65 min",
                exercises: [
                    {
                        id: 201,
                        name: "Front Squat to Back Squat Superset",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 4,
                        reps: "12-15 each",
                        note: "No rest between variations, maximize metabolic stress."
                    },
                    {
                        id: 202,
                        name: "Dumbbell Chest Press (Slow Tempo)",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "12-15",
                        note: "4-second eccentric, 1-second pause, explosive press."
                    },
                    {
                        id: 203,
                        name: "Pendlay Row",
                        image: "https://images.unsplash.com/photo-1584863265800-677bb11f36b3?w=300",
                        sets: 4,
                        reps: "12-15",
                        note: "Dead stop at bottom, explosive pull to sternum."
                    },
                    {
                        id: 204,
                        name: "Walking Lunges with Overhead Hold",
                        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300",
                        sets: 3,
                        reps: "20 steps",
                        note: "Maintain upright torso, focus on glute activation."
                    }
                ]
            }
        ]
    },

    {
        id: 2,
        title: "Anabolic Mass Builder",
        slug: "anabolic-mass-builder",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400",

        meta: {
            days: 4,
            goal: "Building Muscle",
            muscle: "Full Body",
            equipment: "Full Gym",
            level: "Advanced",
            author: "Apex Team",
            rating: 4.9,
            reviews: 428
        },

        description: `
      <p><strong>The Philosophy:</strong> The Anabolic Mass Builder leverages the principle of undulating periodization within each training week. By cycling between strength-focused sessions (5-7 reps) and hypertrophy-focused sessions (10-15 reps), we create a synergistic effect that enhances both myofibrillar and sarcoplasmic hypertrophy. This dual-stimulus approach maximizes anabolic signaling pathways while preventing adaptation plateaus that commonly occur with linear programming.</p>
      <br/>
      <p><strong>Who is this for?</strong> Advanced trainees who have exhausted traditional linear progression models and need a sophisticated approach to continue gaining muscle mass. This program requires excellent recovery capacity, solid nutritional habits, and the ability to push close to muscular failure safely. Best suited for those with 2+ years of consistent training experience who understand autoregulation and can manage training intensity effectively.</p>
      <br/>
      <p><strong>Phase Breakdown:</strong></p>
      <ul>
        <li><strong>Phase 1 (Strength Emphasis):</strong> Lower rep ranges (5-8) with heavier loads to enhance neural drive and create the foundation for handling greater training volumes. This phase primes the muscle fibers for growth by improving force production capacity.</li>
        <li><strong>Phase 2 (Volume Expansion):</strong> Strategic increase in total training volume with rep ranges of 10-15, incorporating advanced techniques like rest-pause sets, mechanical drop sets, and extended sets to push hypertrophic adaptation to maximal levels.</li>
      </ul>
    `,

        schedule: [
            {
                phaseName: "Phase 1: Strength Emphasis",
                duration: "Est. 60 min",
                exercises: [
                    {
                        id: 301,
                        name: "Competition Bench Press",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 5,
                        reps: "5-7",
                        note: "Pause 1 second on chest, explosive press with leg drive."
                    },
                    {
                        id: 302,
                        name: "Deficit Deadlift",
                        image: "https://images.unsplash.com/photo-1526403646408-57b94dc15399?w=300",
                        sets: 5,
                        reps: "5-7",
                        note: "Stand on 2-inch platform, focus on starting position strength."
                    },
                    {
                        id: 303,
                        name: "Close-Grip Bench Press",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "6-8",
                        note: "Elbows tucked, target triceps and inner chest."
                    },
                    {
                        id: 304,
                        name: "Weighted Dips",
                        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300",
                        sets: 4,
                        reps: "6-8",
                        note: "Slight forward lean for chest emphasis."
                    },
                    {
                        id: 305,
                        name: "Barbell Curl to Overhead Press",
                        image: "https://images.unsplash.com/photo-1583454156395-6bd7b7f9f1c6?w=300",
                        sets: 3,
                        reps: "8-10",
                        note: "Complex movement for metabolic demand."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Volume Expansion",
                duration: "Est. 70 min",
                exercises: [
                    {
                        id: 401,
                        name: "Incline Dumbbell Press (Rest-Pause)",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "12+4+2",
                        note: "Take 15-second rest between mini-sets, push to failure each time."
                    },
                    {
                        id: 402,
                        name: "Machine Hack Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 4,
                        reps: "12-15",
                        note: "Constant tension, don't lock out at top."
                    },
                    {
                        id: 403,
                        name: "Cable Row (Mechanical Drop Set)",
                        image: "https://images.unsplash.com/photo-1584863265800-677bb11f36b3?w=300",
                        sets: 3,
                        reps: "10+10+10",
                        note: "Change grip from narrow to medium to wide without rest."
                    },
                    {
                        id: 404,
                        name: "Leg Press (Extended Set)",
                        image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=300",
                        sets: 3,
                        reps: "15-20",
                        note: "Final set: reduce weight 3 times to extend set duration."
                    }
                ]
            }
        ]
    },

    {
        id: 3,
        title: "Metabolic Shred Protocol",
        slug: "metabolic-shred-protocol",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400",

        meta: {
            days: 5,
            goal: "Fat Loss",
            muscle: "Full Body",
            equipment: "Full Gym",
            level: "Intermediate",
            author: "Apex Team",
            rating: 4.7,
            reviews: 516
        },

        description: `
      <p><strong>The Philosophy:</strong> The Metabolic Shred Protocol combines resistance training with high-intensity interval conditioning to create a powerful fat-loss environment without sacrificing muscle mass. This program manipulates rest periods, exercise tempo, and movement complexity to elevate EPOC (excess post-exercise oxygen consumption), keeping your metabolism elevated for up to 48 hours post-workout. By maintaining training intensity while in a caloric deficit, we preserve lean muscle tissue and create the defined, athletic physique you're pursuing.</p>
      <br/>
      <p><strong>Who is this for?</strong> Intermediate to advanced trainees who want to lose body fat while maintaining strength and muscle mass. This program is intense and requires solid conditioning base and proper nutrition timing. Ideal for those who can train 5 days per week and are committed to a structured nutrition plan. If you're preparing for a photoshoot, competition, or simply want to achieve peak definition, this protocol delivers results.</p>
      <br/>
      <p><strong>Phase Breakdown:</strong></p>
      <ul>
        <li><strong>Phase 1 (Metabolic Foundation):</strong> Establishes work capacity with circuit-style resistance training and moderate-intensity intervals. Rest periods are 45-60 seconds, maintaining elevated heart rate while allowing sufficient recovery for quality repetitions and technique.</li>
        <li><strong>Phase 2 (Peak Shred):</strong> Intensifies metabolic demand with complex movements, shorter rest periods (30-45 seconds), and strategic integration of HIIT finishers. This phase maximizes fat oxidation while strategic deload days prevent overtraining and maintain hormonal health.</li>
      </ul>
    `,

        schedule: [
            {
                phaseName: "Phase 1: Metabolic Foundation",
                duration: "Est. 45 min",
                exercises: [
                    {
                        id: 501,
                        name: "Kettlebell Swing",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "20",
                        note: "Explosive hip hinge, maximum power output."
                    },
                    {
                        id: 502,
                        name: "Dumbbell Thruster",
                        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300",
                        sets: 4,
                        reps: "15",
                        note: "Squat directly into overhead press, continuous movement."
                    },
                    {
                        id: 503,
                        name: "Battle Rope Waves",
                        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300",
                        sets: 4,
                        reps: "30 sec",
                        note: "Maximum intensity, maintain rhythm throughout."
                    },
                    {
                        id: 504,
                        name: "Box Jump to Burpee",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 4,
                        reps: "12",
                        note: "Land softly, controlled descent into burpee."
                    },
                    {
                        id: 505,
                        name: "Rowing Machine Sprint",
                        image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=300",
                        sets: 4,
                        reps: "250m",
                        note: "Maximum effort, track split times for progression."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Peak Shred",
                duration: "Est. 50 min",
                exercises: [
                    {
                        id: 601,
                        name: "Barbell Complex (DL-Row-Clean-Press)",
                        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300",
                        sets: 5,
                        reps: "8 each",
                        note: "No rest between movements, bar never touches ground."
                    },
                    {
                        id: 602,
                        name: "Assault Bike Intervals",
                        image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=300",
                        sets: 6,
                        reps: "20/40",
                        note: "20 seconds max effort, 40 seconds active recovery."
                    },
                    {
                        id: 603,
                        name: "Medicine Ball Slam to Sprint",
                        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300",
                        sets: 5,
                        reps: "10 + 50m",
                        note: "Explosive slams followed immediately by sprint."
                    },
                    {
                        id: 604,
                        name: "TRX Mountain Climbers",
                        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300",
                        sets: 4,
                        reps: "40 total",
                        note: "Feet elevated, maximum speed with control."
                    }
                ]
            }
        ]
    },

    {
        id: 4,
        title: "Apex HIIT Conditioning",
        slug: "apex-hiit-conditioning",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400",

        meta: {
            days: 4,
            goal: "Fat Loss",
            muscle: "Full Body",
            equipment: "Full Gym",
            level: "Advanced",
            author: "Apex Team",
            rating: 4.9,
            reviews: 389
        },

        description: `
      <p><strong>The Philosophy:</strong> Apex HIIT Conditioning represents the pinnacle of high-intensity interval training, combining advanced biomechanical loading patterns with strategic energy system development. This program utilizes the Tabata protocol, EMOM (every minute on the minute) structures, and density training to create unprecedented metabolic adaptation. By manipulating work-to-rest ratios across different sessions, we target both the phosphagen and glycolytic energy systems, resulting in superior fat oxidation, enhanced cardiovascular capacity, and remarkable improvements in body composition.</p>
      <br/>
      <p><strong>Who is this for?</strong> Elite-level trainees with exceptional work capacity and cardiovascular fitness. This program is designed for individuals who have mastered basic movement patterns and possess the mental fortitude to push through intense discomfort. Ideal for athletes, fitness competitors, or serious enthusiasts preparing for physique competitions or tactical fitness requirements. You should have at least 3 years of consistent training and be injury-free before attempting this protocol.</p>
      <br/>
      <p><strong>Phase Breakdown:</strong></p>
      <ul>
        <li><strong>Phase 1 (Conditioning Base):</strong> Establishes aerobic foundation and movement efficiency under fatigue. Work intervals range from 30-45 seconds with 1:1 work-to-rest ratios, allowing for sustained high intensity while building tolerance for lactate accumulation and training volume.</li>
        <li><strong>Phase 2 (Anaerobic Dominance):</strong> Pushes work capacity to extreme levels with Tabata intervals (20:10), AMRAPs (as many rounds as possible), and density blocks. This phase creates maximal metabolic disturbance, forcing rapid physiological adaptation and accelerated fat loss while maintaining muscle mass through strategic protein intake timing.</li>
      </ul>
    `,

        schedule: [
            {
                phaseName: "Phase 1: Conditioning Base",
                duration: "Est. 40 min",
                exercises: [
                    {
                        id: 701,
                        name: "Air Bike Intervals (30/30)",
                        image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=300",
                        sets: 10,
                        reps: "30/30",
                        note: "30 seconds max effort, 30 seconds easy pace."
                    },
                    {
                        id: 702,
                        name: "Dumbbell Devil Press",
                        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300",
                        sets: 5,
                        reps: "12",
                        note: "Burpee to double snatch, continuous fluid movement."
                    },
                    {
                        id: 703,
                        name: "Ski Erg Sprints",
                        image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=300",
                        sets: 8,
                        reps: "200m",
                        note: "Track time for each interval, maintain consistency."
                    },
                    {
                        id: 704,
                        name: "Sandbag Shouldering",
                        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300",
                        sets: 5,
                        reps: "10/side",
                        note: "Alternate shoulders, explosive hip drive."
                    },
                    {
                        id: 705,
                        name: "Sled Push Sprint",
                        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300",
                        sets: 6,
                        reps: "40m",
                        note: "Heavy load, maximum power output, rest 90 seconds."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Anaerobic Dominance",
                duration: "Est. 35 min",
                exercises: [
                    {
                        id: 801,
                        name: "Tabata Complex (Burpees)",
                        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300",
                        sets: 8,
                        reps: "20/10",
                        note: "8 rounds: 20 seconds max burpees, 10 seconds rest."
                    },
                    {
                        id: 802,
                        name: "AMRAP - 5 Minutes (Hell Circuit)",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 1,
                        reps: "AMRAP",
                        note: "5 thrusters, 10 box jumps, 15 KB swings - max rounds in 5 min."
                    },
                    {
                        id: 803,
                        name: "Assault Runner Sprints",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 10,
                        reps: "15/45",
                        note: "15 seconds all-out sprint, 45 seconds walk recovery."
                    },
                    {
                        id: 804,
                        name: "EMOM - 10 Minutes (Mixed Modal)",
                        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300",
                        sets: 10,
                        reps: "varies",
                        note: "Min 1: 15 cal row, Min 2: 12 devil press - alternate for 10 min."
                    }
                ]
            }
        ]
    },

    {
        id: 5,
        title: "Absolute Strength Foundation",
        slug: "absolute-strength-foundation",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400",

        meta: {
            days: 4,
            goal: "Strength",
            muscle: "Full Body",
            equipment: "Full Gym",
            level: "Advanced",
            author: "Apex Team",
            rating: 4.9,
            reviews: 467
        },

        description: `
      <p><strong>The Philosophy:</strong> The Absolute Strength Foundation is a periodized powerlifting program built on the conjugate method and block periodization principles. This program systematically develops maximal strength through strategic manipulation of intensity, volume, and exercise variation. By focusing on the big three lifts (squat, bench press, deadlift) while incorporating specific accessory work, we enhance neural efficiency, improve rate of force development, and build the structural integrity necessary for elite-level strength performance. Progressive overload is applied through multiple vectors including load, volume, and bar speed.</p>
      <br/>
      <p><strong>Who is this for?</strong> Advanced lifters seeking to maximize absolute strength and compete in powerlifting, or athletes requiring peak force production capability. This program demands technical proficiency in the squat, bench press, and deadlift, along with the ability to handle heavy loads safely. Ideal for those with 3+ years of serious strength training, proper mobility, and no contraindicated injuries. You should be able to squat 1.5x bodyweight, bench 1.25x, and deadlift 2x bodyweight before starting this protocol.</p>
      <br/>
      <p><strong>Phase Breakdown:</strong></p>
      <ul>
        <li><strong>Phase 1 (Structural Capacity):</strong> Builds volume tolerance and technical proficiency with submaximal loads (70-80% 1RM). Focus on bar speed, perfect form, and accumulating quality volume to enhance work capacity and prepare connective tissues for the intensity phase ahead.</li>
        <li><strong>Phase 2 (Peak Intensity):</strong> Reduces volume while increasing intensity to 85-95% 1RM, directly targeting maximal strength adaptations. Strategic use of competition variations, singles, doubles, and triples to peak neural drive and maximize force production. Accessory work becomes highly specific to address individual weak points in the competition lifts.</li>
      </ul>
    `,

        schedule: [
            {
                phaseName: "Phase 1: Structural Capacity",
                duration: "Est. 70 min",
                exercises: [
                    {
                        id: 901,
                        name: "Low Bar Back Squat (Speed Work)",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 8,
                        reps: "3",
                        note: "70% 1RM, focus on bar speed, 60 seconds rest between sets."
                    },
                    {
                        id: 902,
                        name: "Competition Bench Press (Volume)",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 5,
                        reps: "5",
                        note: "75% 1RM, control eccentric, explosive concentric, strict form."
                    },
                    {
                        id: 903,
                        name: "Front Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 4,
                        reps: "6",
                        note: "Builds upper back and quad strength, upright torso position."
                    },
                    {
                        id: 904,
                        name: "Spoto Press",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "5",
                        note: "Pause 1 inch above chest for 2 seconds, builds sticking point strength."
                    },
                    {
                        id: 905,
                        name: "Bulgarian Split Squat",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 3,
                        reps: "8/leg",
                        note: "Address bilateral deficits and build unilateral stability."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Peak Intensity",
                duration: "Est. 75 min",
                exercises: [
                    {
                        id: 1001,
                        name: "Competition Squat (Heavy Singles)",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 6,
                        reps: "1",
                        note: "Work up to 90-95% 1RM, full rest between attempts (3-5 min)."
                    },
                    {
                        id: 1002,
                        name: "Competition Bench Press (Heavy Triples)",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 5,
                        reps: "3",
                        note: "85-90% 1RM, competition pause and commands."
                    },
                    {
                        id: 1003,
                        name: "Conventional Deadlift (Heavy Doubles)",
                        image: "https://images.unsplash.com/photo-1526403646408-57b94dc15399?w=300",
                        sets: 5,
                        reps: "2",
                        note: "88-92% 1RM, reset between reps, maintain optimal positioning."
                    },
                    {
                        id: 1004,
                        name: "Close-Grip Board Press",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "5",
                        note: "Overload lockout, use 2-board for partial range."
                    },
                    {
                        id: 1005,
                        name: "Deficit Deadlift",
                        image: "https://images.unsplash.com/photo-1526403646408-57b94dc15399?w=300",
                        sets: 3,
                        reps: "3",
                        note: "Stand on 2-3 inch platform, builds starting strength."
                    }
                ]
            }
        ]
    },

    {
        id: 6,
        title: "Zero Gravity Calisthenics",
        slug: "zero-gravity-calisthenics",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=400",

        meta: {
            days: 5,
            goal: "Building Muscle",
            muscle: "Full Body",
            equipment: "Bodyweight Only",
            level: "Intermediate",
            author: "Apex Team",
            rating: 4.8,
            reviews: 523
        },

        description: `
      <p><strong>The Philosophy:</strong> Zero Gravity Calisthenics leverages progressive bodyweight movements to build lean, functional muscle without any equipment. This program applies the principle of mechanical tension through movement tempo manipulation, leveraging body angles, and strategic rep schemes. By mastering fundamental movement patterns and progressing to advanced variations, we create sufficient overload to stimulate hypertrophy while developing exceptional relative strength and body control that translates to real-world performance.</p>
      <br/>
      <p><strong>Who is this for?</strong> Intermediate trainees who want to build muscle and strength using only their bodyweight, whether at home, traveling, or preferring minimalist training. This program requires no equipment and can be performed in a small space. Ideal for those who can perform 10+ push-ups, 5+ pull-ups (or have a pull-up bar), and hold a 30-second plank. Perfect for travelers, home gym enthusiasts, or anyone seeking functional strength development without gym access.</p>
      <br/>
      <p><strong>Phase Breakdown:</strong></p>
      <ul>
        <li><strong>Phase 1 (Movement Mastery):</strong> Establishes technical proficiency in fundamental calisthenics movements with moderate rep ranges (8-15). Focus on tempo control and perfect form to build neuromuscular efficiency and prepare the body for advanced progressions ahead.</li>
        <li><strong>Phase 2 (Progressive Overload):</strong> Introduces advanced movement variations, explosive elements, and higher volume to maximize muscle growth. Implements drop sets, pause reps, and isometric holds to create mechanical tension comparable to traditional resistance training while building impressive functional strength.</li>
      </ul>
    `,

        schedule: [
            {
                phaseName: "Phase 1: Movement Mastery",
                duration: "Est. 45 min",
                exercises: [
                    {
                        id: 1101,
                        name: "Archer Push-Ups",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "8-10/side",
                        note: "Shift weight to one arm, other arm extended, control descent."
                    },
                    {
                        id: 1102,
                        name: "Bulgarian Split Squat (Bodyweight)",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 4,
                        reps: "12-15/leg",
                        note: "Rear foot elevated on chair, focus on front leg drive."
                    },
                    {
                        id: 1103,
                        name: "Inverted Row (Table/Door)",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "10-12",
                        note: "Body horizontal, pull chest to bar, squeeze shoulder blades."
                    },
                    {
                        id: 1104,
                        name: "Walking Lunges",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 3,
                        reps: "20 steps",
                        note: "Maintain upright torso, back knee almost touches floor."
                    },
                    {
                        id: 1105,
                        name: "Pike Push-Ups",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 3,
                        reps: "12-15",
                        note: "Hips high, nose to floor, targets shoulders."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Progressive Overload",
                duration: "Est. 50 min",
                exercises: [
                    {
                        id: 1201,
                        name: "Pseudo Planche Push-Ups",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "8-12",
                        note: "Hands by hips, lean forward maximally, intense chest activation."
                    },
                    {
                        id: 1202,
                        name: "Pistol Squat Progression",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 4,
                        reps: "6-8/leg",
                        note: "Single leg squat, opposite leg extended, use support if needed."
                    },
                    {
                        id: 1203,
                        name: "Explosive Pull-Up (or Row)",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "6-10",
                        note: "Pull explosively, pause at top, controlled descent."
                    },
                    {
                        id: 1204,
                        name: "Single-Leg Romanian Deadlift",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 3,
                        reps: "10/leg",
                        note: "Balance on one leg, hinge at hip, hamstring stretch."
                    },
                    {
                        id: 1205,
                        name: "Handstand Push-Up Progression",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 3,
                        reps: "5-8",
                        note: "Wall-assisted or pike, build overhead pressing strength."
                    }
                ]
            }
        ]
    },

    {
        id: 7,
        title: "Living Room Inferno",
        slug: "living-room-inferno",
        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=400",

        meta: {
            days: 4,
            goal: "Fat Loss",
            muscle: "Full Body",
            equipment: "Bodyweight Only",
            level: "Beginner",
            author: "Apex Team",
            rating: 4.6,
            reviews: 612
        },

        description: `
      <p><strong>The Philosophy:</strong> Living Room Inferno transforms your home into a high-intensity training zone using nothing but your bodyweight and determination. This program combines compound bodyweight movements with strategic interval protocols to maximize caloric expenditure and elevate metabolism for hours post-workout. By utilizing various movement patterns that engage multiple muscle groups simultaneously, we create a powerful fat-burning stimulus while preserving lean muscle tissue through adequate protein signaling and progressive movement complexity.</p>
      <br/>
      <p><strong>Who is this for?</strong> Beginners to intermediate individuals who want to burn fat effectively from home without any equipment. This program is perfect for busy professionals, parents, travelers, or anyone who prefers home workouts. Requires only enough space to move freely and can be modified for apartment living (low-impact options available). Ideal for those committed to 4 days per week of 30-40 minute sessions and looking to shed body fat while improving cardiovascular fitness and functional movement capacity.</p>
      <br/>
      <p><strong>Phase Breakdown:</strong></p>
      <ul>
        <li><strong>Phase 1 (Conditioning Build):</strong> Establishes cardiovascular base and movement proficiency with moderate-intensity circuits. Work periods of 30-40 seconds with equal rest allow for quality movement execution while building work capacity and preparing the body for higher intensity demands.</li>
        <li><strong>Phase 2 (Metabolic Peak):</strong> Intensifies caloric burn through HIIT protocols, reduced rest periods, and complex movement combinations. Work-to-rest ratios shift to 40:20, maximizing EPOC effect and creating significant metabolic disturbance for accelerated fat loss while maintaining muscle through explosive, power-based movements.</li>
      </ul>
    `,

        schedule: [
            {
                phaseName: "Phase 1: Conditioning Build",
                duration: "Est. 35 min",
                exercises: [
                    {
                        id: 1301,
                        name: "Jumping Jacks",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 4,
                        reps: "40 seconds",
                        note: "Full range motion, light on feet, maintain rhythm."
                    },
                    {
                        id: 1302,
                        name: "Bodyweight Squat",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 4,
                        reps: "20",
                        note: "Hip crease below knee, chest up, explosive drive up."
                    },
                    {
                        id: 1303,
                        name: "Modified Burpee",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 4,
                        reps: "12",
                        note: "Step back instead of jump, push-up optional, full body movement."
                    },
                    {
                        id: 1304,
                        name: "Mountain Climbers",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 4,
                        reps: "30 seconds",
                        note: "Plank position, drive knees to chest alternating, control core."
                    },
                    {
                        id: 1305,
                        name: "High Knees",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 4,
                        reps: "30 seconds",
                        note: "Drive knees to hip height, quick feet, pump arms."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Metabolic Peak",
                duration: "Est. 40 min",
                exercises: [
                    {
                        id: 1401,
                        name: "Burpee to Tuck Jump",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 5,
                        reps: "10",
                        note: "Full burpee, explosive jump pulling knees to chest."
                    },
                    {
                        id: 1402,
                        name: "Jump Squat",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 5,
                        reps: "15",
                        note: "Squat low, explode up, land softly, immediate next rep."
                    },
                    {
                        id: 1403,
                        name: "Plank Jacks",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 5,
                        reps: "40 seconds",
                        note: "Plank position, jump feet wide and narrow, core tight."
                    },
                    {
                        id: 1404,
                        name: "Speed Skaters",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 5,
                        reps: "40 seconds",
                        note: "Lateral jump side to side, land on one foot, opposite leg back."
                    },
                    {
                        id: 1405,
                        name: "Sprint in Place",
                        image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300",
                        sets: 4,
                        reps: "20 seconds",
                        note: "Maximum effort, drive knees high, pump arms aggressively."
                    }
                ]
            }
        ]
    },

    {
        id: 8,
        title: "Bodyweight Strength Architect",
        slug: "bodyweight-strength-architect",
        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=400",

        meta: {
            days: 4,
            goal: "Strength",
            muscle: "Full Body",
            equipment: "Minimal Equipment",
            level: "Intermediate",
            author: "Apex Team",
            rating: 4.7,
            reviews: 391
        },

        description: `
      <p><strong>The Philosophy:</strong> The Bodyweight Strength Architect applies powerlifting principles to calisthenics movements, building maximal relative strength through progressive movement variations and strategic volume accumulation. This program focuses on the "big three" of bodyweight training: push-ups, pull-ups, and squats, progressing through increasingly challenging variations. By manipulating leverage, range of motion, and movement tempo, we create sufficient mechanical tension to build significant strength gains without external resistance while developing remarkable body control and proprioception.</p>
      <br/>
      <p><strong>Who is this for?</strong> Intermediate to advanced bodyweight enthusiasts seeking to maximize strength using minimal equipment (just a pull-up bar or sturdy table edge). This program requires baseline strength: 20+ push-ups, 8+ pull-ups, and 30+ bodyweight squats. Perfect for minimalist trainers, outdoor training enthusiasts, or those who want to master advanced calisthenics skills like one-arm push-ups, muscle-ups, or pistol squats. Requires dedication to 4 focused training sessions weekly with emphasis on perfect technique and progressive overload.</p>
      <br/>
      <p><strong>Phase Breakdown:</strong></p>
      <ul>
        <li><strong>Phase 1 (Strength Foundation):</strong> Builds work capacity with moderate rep ranges (6-10) using challenging movement variations. Focus on eccentric control, isometric holds, and technique refinement to create the neuromuscular efficiency necessary for peak strength adaptations in advanced progressions.</li>
        <li><strong>Phase 2 (Maximal Strength):</strong> Lower rep ranges (3-6) with the most challenging movement variations accessible. Incorporates weighted progressions where available, one-sided movements for unilateral strength development, and explosive variations to maximize neural drive and force production capacity approaching maximal effort levels.</li>
      </ul>
    `,

        schedule: [
            {
                phaseName: "Phase 1: Strength Foundation",
                duration: "Est. 50 min",
                exercises: [
                    {
                        id: 1501,
                        name: "Diamond Push-Ups",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 5,
                        reps: "8-10",
                        note: "Hands together forming diamond, elbows tight, full ROM."
                    },
                    {
                        id: 1502,
                        name: "Chin-Ups (Supinated Grip)",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 5,
                        reps: "6-8",
                        note: "Palms facing you, pull chest to bar, controlled descent."
                    },
                    {
                        id: 1503,
                        name: "Shrimp Squat",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 4,
                        reps: "8/leg",
                        note: "Single leg squat, rear foot tucked behind, deep knee bend."
                    },
                    {
                        id: 1504,
                        name: "L-Sit Hold (Floor or Bars)",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "20-30 sec",
                        note: "Legs extended horizontal, core engaged, shoulders depressed."
                    },
                    {
                        id: 1505,
                        name: "Nordic Curl Negatives",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 3,
                        reps: "5-6",
                        note: "Eccentric only, control descent as long as possible."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Maximal Strength",
                duration: "Est. 55 min",
                exercises: [
                    {
                        id: 1601,
                        name: "One-Arm Push-Up Progression",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 5,
                        reps: "3-5/arm",
                        note: "Feet wide for stability, full ROM to floor, explosive press."
                    },
                    {
                        id: 1602,
                        name: "Weighted Pull-Ups",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 5,
                        reps: "4-6",
                        note: "Backpack with books/weight, strict form, chest to bar."
                    },
                    {
                        id: 1603,
                        name: "Pistol Squat",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 5,
                        reps: "5/leg",
                        note: "Full depth single leg squat, opposite leg extended forward."
                    },
                    {
                        id: 1604,
                        name: "Front Lever Progression",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "10 sec hold",
                        note: "Tuck, advanced tuck, or straddle based on level."
                    },
                    {
                        id: 1605,
                        name: "Plyometric Push-Up",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "6-8",
                        note: "Explosive push, hands leave ground, clap optional."
                    }
                ]
            }
        ]
    },

    {
        id: 9,
        title: "Apartment Shred Challenge",
        slug: "apartment-shred-challenge",
        image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400",

        meta: {
            days: 5,
            goal: "Fat Loss",
            muscle: "Full Body",
            equipment: "Bodyweight Only",
            level: "Intermediate",
            author: "Apex Team",
            rating: 4.8,
            reviews: 487
        },

        description: `
      <p><strong>The Philosophy:</strong> The Apartment Shred Challenge is designed specifically for living spaces where noise and space are limited, yet fat loss results are not compromised. This program utilizes low-impact but high-intensity movements that keep your heart rate elevated without disturbing neighbors below. By combining strength-based bodyweight circuits with controlled cardio intervals, we create significant caloric deficit and metabolic enhancement. The strategic sequencing of upper body, lower body, and core movements ensures continuous work without excessive joint impact or noise production.</p>
      <br/>
      <p><strong>Who is this for?</strong> Intermediate trainees living in apartments, condos, or shared spaces who need effective fat loss programming without high-impact jumping or loud equipment. This program respects space constraints while delivering serious results through density training and time-under-tension protocols. Ideal for those who can dedicate 5 sessions of 40-45 minutes weekly and want to achieve visible fat loss and muscle definition. Perfect for shift workers, parents with sleeping children, or anyone in noise-sensitive environments seeking body transformation.</p>
      <br/>
      <p><strong>Phase Breakdown:</strong></p>
      <ul>
        <li><strong>Phase 1 (Low-Impact Foundation):</strong> Establishes metabolic conditioning through controlled, deliberate movements with minimal impact. Circuits combine strength movements with stepping patterns and isometric holds to maintain elevated heart rate. Rest periods of 60 seconds allow for recovery while keeping fat oxidation elevated throughout the session.</li>
        <li><strong>Phase 2 (Intensity Amplification):</strong> Increases movement complexity and reduces rest to 45 seconds while maintaining low-impact execution. Incorporates more challenging variations, compound movement combinations, and targeted muscle exhaustion protocols to maximize caloric burn and create the hormonal environment for accelerated fat loss without any jumping or impact-heavy exercises.</li>
      </ul>
    `,

        schedule: [
            {
                phaseName: "Phase 1: Low-Impact Foundation",
                duration: "Est. 40 min",
                exercises: [
                    {
                        id: 1701,
                        name: "Slow Push-Ups (4-2-4 Tempo)",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "10-12",
                        note: "4 seconds down, 2 second pause, 4 seconds up - maximum TUT."
                    },
                    {
                        id: 1702,
                        name: "Step-Back Lunges",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 4,
                        reps: "12/leg",
                        note: "Silent execution, control descent, drive through front heel."
                    },
                    {
                        id: 1703,
                        name: "Plank to Down Dog Flow",
                        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300",
                        sets: 4,
                        reps: "15",
                        note: "Smooth transition, engage core throughout, shoulder mobility."
                    },
                    {
                        id: 1704,
                        name: "Static Squat Hold to Calf Raise",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 4,
                        reps: "30 sec + 20",
                        note: "Hold squat position, then perform calf raises from bottom."
                    },
                    {
                        id: 1705,
                        name: "Bear Crawl (In Place)",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 4,
                        reps: "40 seconds",
                        note: "Hands and feet on floor, alternating limb movement, quiet steps."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Intensity Amplification",
                duration: "Est. 45 min",
                exercises: [
                    {
                        id: 1801,
                        name: "Decline Push-Ups (Feet Elevated)",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 5,
                        reps: "12-15",
                        note: "Feet on couch/chair, increase difficulty, controlled movement."
                    },
                    {
                        id: 1802,
                        name: "Bulgarian Split Squat Pulse",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 5,
                        reps: "20/leg",
                        note: "Small pulses at bottom of range, constant tension."
                    },
                    {
                        id: 1803,
                        name: "Commando Plank",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "12",
                        note: "Plank to forearm plank, alternate lead arm, control rotation."
                    },
                    {
                        id: 1804,
                        name: "Wall Sit to Tippy Toes",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 4,
                        reps: "45 sec",
                        note: "Hold wall sit, rise to toes and lower repeatedly."
                    },
                    {
                        id: 1805,
                        name: "Inchworm to Push-Up",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 4,
                        reps: "10",
                        note: "Walk hands out to plank, push-up, walk hands back to feet."
                    }
                ]
            }
        ]
    },

    {
        id: 10,
        title: "Progressive Calisthenics Mastery",
        slug: "progressive-calisthenics-mastery",
        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=400",

        meta: {
            days: 5,
            goal: "Building Muscle",
            muscle: "Full Body",
            equipment: "Minimal Equipment",
            level: "Advanced",
            author: "Apex Team",
            rating: 4.9,
            reviews: 356
        },

        description: `
      <p><strong>The Philosophy:</strong> Progressive Calisthenics Mastery represents the apex of bodyweight training, systematically building toward elite skills like planche, front lever, human flag, and muscle-ups. This program applies progressive overload through advanced movement progressions, isometric strength development, and explosive power training. By mastering fundamental strength requirements and progressively introducing more complex movement patterns, we develop the exceptional strength-to-weight ratio and body awareness necessary for advanced calisthenics feats while building lean, functional muscle mass throughout the journey.</p>
      <br/>
      <p><strong>Who is this for?</strong> Advanced calisthenics practitioners ready to pursue elite-level skills and movements. This program requires strong baseline abilities: 15+ pull-ups, 30+ push-ups, 10+ dips, and ability to hold a 45-second hollow body position. Ideal for those who have exhausted traditional bodyweight progressions and want to achieve impressive skills that demonstrate true mastery of body control. Requires access to pull-up bar, parallel bars or stable furniture, and floor space. Best suited for athletes, gymnastics enthusiasts, or dedicated bodyweight specialists with 2+ years of consistent training.</p>
      <br/>
      <p><strong>Phase Breakdown:</strong></p>
      <ul>
        <li><strong>Phase 1 (Skill Preparation):</strong> Builds the specific strength qualities required for advanced skills through targeted progressions. Focuses on scapular strength, hollow body control, and foundational movement patterns. Higher rep ranges (8-12) with perfect technique establish the movement vocabulary and structural integrity necessary for skill work.</li>
        <li><strong>Phase 2 (Advanced Integration):</strong> Introduces actual skill progressions with lower rep ranges (3-6) and longer holds (10-30 seconds). Combines strength work with skill practice, allowing adequate recovery between attempts. Strategic deload weeks prevent overuse injuries while systematically progressing toward target skills through carefully structured progressions that respect recovery demands.</li>
      </ul>
    `,

        schedule: [
            {
                phaseName: "Phase 1: Skill Preparation",
                duration: "Est. 55 min",
                exercises: [
                    {
                        id: 1901,
                        name: "Scapular Pull-Ups",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "12-15",
                        note: "Only shoulder blade movement, arms straight, control."
                    },
                    {
                        id: 1902,
                        name: "Planche Lean Hold",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "20-30 sec",
                        note: "Hands by hips, lean forward maximally, straight body."
                    },
                    {
                        id: 1903,
                        name: "Tuck Front Lever Hold",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "15-25 sec",
                        note: "Knees to chest, back horizontal, shoulders engaged."
                    },
                    {
                        id: 1904,
                        name: "Chest-to-Bar Pull-Ups",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "8-10",
                        note: "Pull sternum to bar, hold top position, maximum ROM."
                    },
                    {
                        id: 1905,
                        name: "Ring Support Hold",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "30-45 sec",
                        note: "Top of dip position, turn rings out, maintain stability."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Advanced Integration",
                duration: "Est. 65 min",
                exercises: [
                    {
                        id: 2001,
                        name: "Muscle-Up Progression",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 5,
                        reps: "3-5",
                        note: "Full muscle-up or transition practice, explosive pull, aggressive turnover."
                    },
                    {
                        id: 2002,
                        name: "Advanced Tuck Planche Hold",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "10-20 sec",
                        note: "Knees closer to chest than tuck, shoulder protraction maximal."
                    },
                    {
                        id: 2003,
                        name: "Straddle Front Lever Hold",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "8-15 sec",
                        note: "Legs in straddle position, horizontal body, scapular depression."
                    },
                    {
                        id: 2004,
                        name: "Weighted Dips",
                        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300",
                        sets: 5,
                        reps: "5-8",
                        note: "Backpack with weight, full ROM, controlled eccentric."
                    },
                    {
                        id: 2005,
                        name: "Human Flag Progression",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "5-10 sec",
                        note: "Pole/doorframe hold, tuck or straddle based on ability."
                    }
                ]
            }
        ]
    },

    {
        id: 11,
        title: "Spine Restore",
        slug: "spine-restore",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400",

        meta: {
            days: 5,
            goal: "Recovery",
            muscle: "Back",
            equipment: "Yoga Mat",
            level: "Beginner",
            author: "Dr. Elena Ray",
            rating: 4.9,
            reviews: 287
        },

        description: `
    <p><strong>The Philosophy:</strong> Spine Restore is a therapeutic mobility program designed to counteract the damaging effects of prolonged sitting and poor posture. This program activates the parasympathetic nervous system, reducing cortisol levels while systematically decompressing the vertebrae through gentle, controlled movements. Research shows that spinal mobility work not only alleviates back pain but also improves nervous system function, digestion, and overall vitality.</p>
    <br/>
    <p><strong>Who is this for?</strong> This program is ideal for office workers experiencing chronic upper or lower back tension, athletes recovering from heavy compound lifts, or anyone dealing with posture-related discomfort. If you find yourself slouching, experiencing stiffness after sitting, or dealing with recurring back pain, this program will systematically rebuild your spinal health from the ground up.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 - Spinal Awareness:</strong> Gentle mobilization to awaken dormant movement patterns and increase proprioception along the entire spine.</li>
      <li><strong>Phase 2 - Deep Release:</strong> Targeted stretches that address common problem areas including thoracic spine, hip flexors, and cervical tension.</li>
      <li><strong>Phase 3 - Integration:</strong> Flow sequences that combine mobility gains into functional movement patterns for lasting postural improvement.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Phase 1: Spinal Awareness",
                duration: "Est. 18 min",
                exercises: [
                    {
                        id: 2101,
                        name: "Cat-Cow Stretch",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 3,
                        reps: "1 min",
                        note: "Sync breath with movement. Inhale on cow, exhale on cat."
                    },
                    {
                        id: 2102,
                        name: "Thread the Needle",
                        image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=300",
                        sets: 2,
                        reps: "45 sec/side",
                        note: "Focus on thoracic rotation, keep hips stable."
                    },
                    {
                        id: 2103,
                        name: "Child's Pose with Side Reach",
                        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
                        sets: 2,
                        reps: "1 min/side",
                        note: "Feel the stretch along the lats and lower back."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Deep Release",
                duration: "Est. 22 min",
                exercises: [
                    {
                        id: 2104,
                        name: "Sphinx to Seal Progression",
                        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=300",
                        sets: 3,
                        reps: "90 sec",
                        note: "Gradually increase extension, listen to your body."
                    },
                    {
                        id: 2105,
                        name: "Supine Spinal Twist",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 2,
                        reps: "2 min/side",
                        note: "Keep shoulders grounded, breathe into the twist."
                    },
                    {
                        id: 2106,
                        name: "Thoracic Bridge",
                        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=300",
                        sets: 3,
                        reps: "10 reps",
                        note: "Focus on upper back extension, not lower back."
                    }
                ]
            },
            {
                phaseName: "Phase 3: Integration",
                duration: "Est. 20 min",
                exercises: [
                    {
                        id: 2107,
                        name: "Cat-Cow to Downward Dog Flow",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 3,
                        reps: "2 min",
                        note: "Smooth transitions, maintain spinal awareness."
                    },
                    {
                        id: 2108,
                        name: "Bird Dog Holds",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "30 sec/side",
                        note: "Stabilize the spine while moving limbs."
                    }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "Sunrise Flow",
        slug: "sunrise-flow",
        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=400",

        meta: {
            days: 7,
            goal: "Flexibility",
            muscle: "Full Body",
            equipment: "Yoga Mat",
            level: "Intermediate",
            author: "Maya Patel",
            rating: 4.8,
            reviews: 432
        },

        description: `
    <p><strong>The Philosophy:</strong> Sunrise Flow is an energizing morning yoga sequence designed to awaken your body and mind, setting a positive tone for the entire day. This practice combines dynamic vinyasa movements with mindful breathing techniques to increase circulation, enhance mental clarity, and build sustainable energy without the crash of caffeine. Studies demonstrate that morning movement routines significantly improve mood regulation, cognitive function, and metabolic health throughout the day.</p>
    <br/>
    <p><strong>Who is this for?</strong> Perfect for early risers looking to replace their coffee dependency with natural energy, professionals seeking mental clarity before work, or anyone wanting to establish a consistent morning wellness ritual. Whether you're new to yoga or have years of experience, this adaptable flow meets you where you are and grows with your practice. No previous yoga experience required, just a willingness to move and breathe.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 - Awakening:</strong> Gentle movements and breathwork to transition from sleep to alertness, focusing on joint mobility and circulation.</li>
      <li><strong>Phase 2 - Building Heat:</strong> Dynamic sun salutation variations that elevate heart rate and build internal warmth through flowing sequences.</li>
      <li><strong>Phase 3 - Integration & Grounding:</strong> Balancing poses and gentle stretches to center your energy and prepare you mentally for the day ahead.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Phase 1: Awakening",
                duration: "Est. 15 min",
                exercises: [
                    {
                        id: 2201,
                        name: "Seated Side Bends",
                        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
                        sets: 2,
                        reps: "8/side",
                        note: "Open the intercostal muscles, breathe deeply."
                    },
                    {
                        id: 2202,
                        name: "Neck Rolls",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 1,
                        reps: "5 each direction",
                        note: "Slow and controlled, release tension."
                    },
                    {
                        id: 2203,
                        name: "Wrist & Ankle Circles",
                        image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=300",
                        sets: 2,
                        reps: "10 circles",
                        note: "Prepare joints for weight-bearing poses."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Building Heat",
                duration: "Est. 25 min",
                exercises: [
                    {
                        id: 2204,
                        name: "Sun Salutation A",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 5,
                        reps: "Full sequence",
                        note: "One breath per movement, build steady rhythm."
                    },
                    {
                        id: 2205,
                        name: "Warrior I to Warrior II Flow",
                        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300",
                        sets: 3,
                        reps: "5 transitions/side",
                        note: "Strong legs, open chest, steady gaze."
                    },
                    {
                        id: 2206,
                        name: "Standing Forward Fold Variations",
                        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=300",
                        sets: 2,
                        reps: "90 sec",
                        note: "Release hamstrings, let gravity assist."
                    }
                ]
            },
            {
                phaseName: "Phase 3: Integration & Grounding",
                duration: "Est. 12 min",
                exercises: [
                    {
                        id: 2207,
                        name: "Tree Pose",
                        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=300",
                        sets: 2,
                        reps: "60 sec/side",
                        note: "Find your center, soft gaze forward."
                    },
                    {
                        id: 2208,
                        name: "Seated Meditation",
                        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
                        sets: 1,
                        reps: "3 min",
                        note: "Set your intention for the day."
                    }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "Office Reset",
        slug: "office-reset",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400",

        meta: {
            days: 3,
            goal: "Recovery",
            muscle: "Upper Body",
            equipment: "None",
            level: "Beginner",
            author: "Dr. Marcus Chen",
            rating: 4.9,
            reviews: 521
        },

        description: `
    <p><strong>The Philosophy:</strong> Office Reset is a scientifically-designed mobility program that targets the specific postural dysfunctions caused by desk work. Hours of sitting create predictable patterns of tightness and weakness: shortened hip flexors, rounded shoulders, forward head posture, and inactive glutes. This program systematically reverses these patterns through strategic stretching and activation exercises that can be performed anywhere, requiring zero equipment. Research confirms that regular movement breaks increase productivity by up to 23% while significantly reducing musculoskeletal pain.</p>
    <br/>
    <p><strong>Who is this for?</strong> This program is essential for anyone spending more than 4 hours daily at a desk. Whether you're a software developer, accountant, student, or remote worker, these movements will counteract the physical toll of prolonged sitting. Perfect for those experiencing neck pain, shoulder tension, lower back discomfort, or general stiffness. Can be done during lunch breaks, between meetings, or as a mid-afternoon energy boost without changing clothes or breaking a sweat.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 - Upper Body Relief:</strong> Targeted stretches for neck, shoulders, and chest to reverse rounded posture and tech neck syndrome.</li>
      <li><strong>Phase 2 - Hip & Lower Back Release:</strong> Movements that open chronically tight hip flexors and decompress the lumbar spine from prolonged sitting.</li>
      <li><strong>Phase 3 - Full Body Integration:</strong> Standing sequences that restore proper posture and activate dormant stabilizer muscles throughout the entire kinetic chain.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Phase 1: Upper Body Relief",
                duration: "Est. 12 min",
                exercises: [
                    {
                        id: 2301,
                        name: "Doorway Chest Stretch",
                        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300",
                        sets: 2,
                        reps: "60 sec/side",
                        note: "Open the pectorals, feel stretch across chest."
                    },
                    {
                        id: 2302,
                        name: "Upper Trap Stretch",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 3,
                        reps: "45 sec/side",
                        note: "Gentle pull, no forcing. Breathe into tension."
                    },
                    {
                        id: 2303,
                        name: "Chin Tucks",
                        image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=300",
                        sets: 3,
                        reps: "15 reps",
                        note: "Strengthen deep neck flexors, improve head position."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Hip & Lower Back Release",
                duration: "Est. 15 min",
                exercises: [
                    {
                        id: 2304,
                        name: "Standing Hip Flexor Stretch",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 3,
                        reps: "90 sec/side",
                        note: "Posterior pelvic tilt, feel front of hip opening."
                    },
                    {
                        id: 2305,
                        name: "Figure-4 Glute Stretch",
                        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
                        sets: 2,
                        reps: "2 min/side",
                        note: "Can be done in chair. Release piriformis tension."
                    },
                    {
                        id: 2306,
                        name: "Cat-Cow at Desk",
                        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=300",
                        sets: 3,
                        reps: "1 min",
                        note: "Seated version. Mobilize entire spine."
                    }
                ]
            },
            {
                phaseName: "Phase 3: Full Body Integration",
                duration: "Est. 10 min",
                exercises: [
                    {
                        id: 2307,
                        name: "Wall Angels",
                        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Retrain shoulder blade mechanics and posture."
                    },
                    {
                        id: 2308,
                        name: "Standing Glute Squeezes",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "20 reps",
                        note: "Reactivate inhibited glutes from sitting."
                    }
                ]
            }
        ]
    },
    {
        id: 14,
        title: "Deep Stretch Therapy",
        slug: "deep-stretch-therapy",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400",

        meta: {
            days: 4,
            goal: "Flexibility",
            muscle: "Lower Body",
            equipment: "Yoga Mat",
            level: "Intermediate",
            author: "Sarah Mitchell",
            rating: 4.7,
            reviews: 356
        },

        description: `
    <p><strong>The Philosophy:</strong> Deep Stretch Therapy is an advanced flexibility program that uses prolonged static holds and myofascial release techniques to create lasting changes in tissue length and joint mobility. Unlike dynamic stretching, this approach targets the fascia—the connective tissue network that often limits range of motion more than muscles themselves. By holding stretches for extended periods (2-5 minutes), we trigger the relaxation response in muscle spindles and gradually remodel fascial restrictions. This is true structural change, not temporary flexibility gains that disappear overnight.</p>
    <br/>
    <p><strong>Who is this for?</strong> Ideal for athletes recovering from intense training cycles, individuals with chronically tight hamstrings or hip flexors, or anyone preparing for activities requiring exceptional flexibility like martial arts or dance. This program is also perfect for powerlifters and CrossFit athletes who need to maintain mobility despite heavy loading. If you've plateaued with regular stretching or feel perpetually tight despite consistent effort, these deeper techniques will break through your limitations. Requires patience and body awareness to work at the edge of discomfort without pushing into pain.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 - Foundation Release:</strong> Long-duration stretches for major muscle groups including hamstrings, hip flexors, and calves using passive techniques.</li>
      <li><strong>Phase 2 - Hip Complex:</strong> Comprehensive hip opening sequence addressing all planes of motion—flexion, extension, internal and external rotation.</li>
      <li><strong>Phase 3 - Integration & Maintenance:</strong> Active flexibility work that strengthens new ranges of motion, ensuring gains transfer to functional movement.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Phase 1: Foundation Release",
                duration: "Est. 25 min",
                exercises: [
                    {
                        id: 2401,
                        name: "Supine Hamstring Stretch with Strap",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 2,
                        reps: "3 min/side",
                        note: "Keep opposite leg grounded. Relax into stretch."
                    },
                    {
                        id: 2402,
                        name: "Couch Stretch (Hip Flexor)",
                        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300",
                        sets: 2,
                        reps: "4 min/side",
                        note: "Advanced hip flexor stretch. Breathe through intensity."
                    },
                    {
                        id: 2403,
                        name: "Wall Calf Stretch",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 2,
                        reps: "2 min/side",
                        note: "Both straight and bent knee versions for gastrocnemius and soleus."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Hip Complex",
                duration: "Est. 30 min",
                exercises: [
                    {
                        id: 2404,
                        name: "Pigeon Pose Progression",
                        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
                        sets: 2,
                        reps: "5 min/side",
                        note: "Ultimate external rotation stretch. Props for support as needed."
                    },
                    {
                        id: 2405,
                        name: "90/90 Hip Stretch",
                        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=300",
                        sets: 2,
                        reps: "3 min/side",
                        note: "Addresses both internal and external hip rotation simultaneously."
                    },
                    {
                        id: 2406,
                        name: "Frog Pose",
                        image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=300",
                        sets: 2,
                        reps: "4 min",
                        note: "Deep adductor stretch. Use padding under knees."
                    },
                    {
                        id: 2407,
                        name: "Lizard Pose",
                        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=300",
                        sets: 2,
                        reps: "3 min/side",
                        note: "Hip flexor and quad stretch combined."
                    }
                ]
            },
            {
                phaseName: "Phase 3: Integration & Maintenance",
                duration: "Est. 20 min",
                exercises: [
                    {
                        id: 2408,
                        name: "Standing Split Progression",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "90 sec/side",
                        note: "Active flexibility. Engage muscles through new ROM."
                    },
                    {
                        id: 2409,
                        name: "Jefferson Curl",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 3,
                        reps: "10 slow reps",
                        note: "Loaded spinal flexion. Build resilient flexibility."
                    }
                ]
            }
        ]
    },
    {
        id: 15,
        title: "Evening Wind Down",
        slug: "evening-wind-down",
        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=400",

        meta: {
            days: 7,
            goal: "Recovery",
            muscle: "Full Body",
            equipment: "Yoga Mat",
            level: "Beginner",
            author: "Dr. Elena Ray",
            rating: 4.9,
            reviews: 673
        },

        description: `
    <p><strong>The Philosophy:</strong> Evening Wind Down is a restorative practice designed to activate your parasympathetic nervous system—the body's natural relaxation response. In our constantly stimulated modern world, most people exist in chronic sympathetic dominance (fight-or-flight), which disrupts sleep quality, hormone balance, and recovery. This program uses gentle yin yoga principles, breathwork, and progressive relaxation to physiologically shift your body into a parasympathetic state. Research shows that consistent evening relaxation practices can improve sleep onset by 40%, reduce cortisol levels, and enhance next-day performance by optimizing recovery during sleep.</p>
    <br/>
    <p><strong>Who is this for?</strong> Perfect for anyone struggling with sleep quality, athletes needing enhanced recovery, professionals dealing with high stress, or individuals with racing minds at bedtime. This practice is especially valuable for people who train intensely and need to optimize recovery, those dealing with anxiety or stress-related sleep issues, or anyone wanting to establish a calming pre-sleep ritual. No yoga experience needed—just comfort with stillness and a willingness to slow down. Can be performed in pajamas on your bedroom floor an hour before bed.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 - Tension Release:</strong> Gentle movements that physically release accumulated muscular tension from the day, preparing body for stillness.</li>
      <li><strong>Phase 2 - Deep Restoration:</strong> Long-hold yin poses that target fascia and trigger relaxation response through extended passive stretching.</li>
      <li><strong>Phase 3 - Nervous System Reset:</strong> Breathwork and meditation practices that directly calm the mind and prepare you for restorative sleep.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Phase 1: Tension Release",
                duration: "Est. 15 min",
                exercises: [
                    {
                        id: 2501,
                        name: "Legs Up the Wall",
                        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
                        sets: 1,
                        reps: "5 min",
                        note: "Drain lymphatic fluid, reduce leg swelling, calm nervous system."
                    },
                    {
                        id: 2502,
                        name: "Gentle Spinal Twists",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 2,
                        reps: "2 min/side",
                        note: "Release spinal tension accumulated from day."
                    },
                    {
                        id: 2503,
                        name: "Shoulder Rolls",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 2,
                        reps: "10 each direction",
                        note: "Slowly release shoulder and neck tension."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Deep Restoration",
                duration: "Est. 25 min",
                exercises: [
                    {
                        id: 2504,
                        name: "Supported Child's Pose",
                        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
                        sets: 1,
                        reps: "5 min",
                        note: "Place pillow under torso. Complete surrender position."
                    },
                    {
                        id: 2505,
                        name: "Reclined Butterfly Pose",
                        image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=300",
                        sets: 1,
                        reps: "6 min",
                        note: "Props under knees if needed. Open hips passively."
                    },
                    {
                        id: 2506,
                        name: "Supported Bridge Pose",
                        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300",
                        sets: 1,
                        reps: "4 min",
                        note: "Block under sacrum. Gentle chest opener."
                    },
                    {
                        id: 2507,
                        name: "Supine Spinal Twist",
                        image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=300",
                        sets: 1,
                        reps: "4 min/side",
                        note: "Final release for spine. Arms in T-position."
                    }
                ]
            },
            {
                phaseName: "Phase 3: Nervous System Reset",
                duration: "Est. 12 min",
                exercises: [
                    {
                        id: 2508,
                        name: "4-7-8 Breathing",
                        image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=300",
                        sets: 5,
                        reps: "4 cycles",
                        note: "Inhale 4 counts, hold 7, exhale 8. Activates parasympathetic system."
                    },
                    {
                        id: 2509,
                        name: "Body Scan Meditation",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 1,
                        reps: "5 min",
                        note: "Progressive relaxation from toes to crown. Release all tension."
                    },
                    {
                        id: 2510,
                        name: "Savasana with Guided Visualization",
                        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300",
                        sets: 1,
                        reps: "5 min",
                        note: "Final resting pose. Prepare mind and body for sleep."
                    }
                ]
            }
        ]
    },


    {
        id: 16,
        title: "The Big Three Protocol",
        slug: "the-big-three-protocol",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400",

        meta: {
            days: 12,
            goal: "Strength",
            muscle: "Full Body",
            equipment: "Barbell",
            level: "Advanced",
            author: "Coach Mike Tuchscherer",
            rating: 4.9,
            reviews: 892
        },

        description: `
    <p><strong>The Philosophy:</strong> The Big Three Protocol is a comprehensive powerlifting program built around the foundational competition lifts: squat, bench press, and deadlift. This program utilizes periodized intensity and volume manipulation based on proven Eastern Bloc training methodologies and modern autoregulation principles. By focusing exclusively on these three movement patterns and their direct variations, we maximize neural adaptations, motor pattern refinement, and absolute strength development. Research in strength science demonstrates that specificity of training is the primary driver of strength gains—you get strongest at what you practice most frequently with appropriate intensity and recovery.</p>
    <br/>
    <p><strong>Who is this for?</strong> This program is designed for intermediate to advanced lifters with at least 2 years of consistent barbell training experience. Ideal for competitive powerlifters preparing for meets, strength athletes looking to peak their absolute strength numbers, or dedicated lifters who have mastered fundamental movement patterns and are ready for high-intensity, specialized training. You should be comfortable handling 85-95% of your one-rep max and have established baseline strength standards (approximate minimums: 1.5x bodyweight squat, 1x bodyweight bench, 2x bodyweight deadlift). This program demands technical proficiency, mental toughness, and diligent recovery practices.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 - Volume Accumulation:</strong> Higher volume at moderate intensities (70-80%) to build work capacity, hypertrophy, and movement quality across all three lifts.</li>
      <li><strong>Phase 2 - Intensity Build:</strong> Progressive loading from 80-90% with reduced volume, developing maximal strength and neural efficiency in primary movement patterns.</li>
      <li><strong>Phase 3 - Competition Peak:</strong> Peak intensities (90-100%) with minimal volume, CNS priming, and technical refinement to express maximum strength on test day.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Phase 1: Volume Accumulation",
                duration: "Est. 90 min",
                exercises: [
                    {
                        id: 3101,
                        name: "Competition Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 5,
                        reps: "5",
                        note: "75% of 1RM. Focus on bar speed and technique."
                    },
                    {
                        id: 3102,
                        name: "Pause Squat",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "3",
                        note: "65% of 1RM. 2-second pause at bottom. Build strength out of the hole."
                    },
                    {
                        id: 3103,
                        name: "Front Squat",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 4,
                        reps: "5",
                        note: "70% of front squat max. Quad emphasis, core stability."
                    },
                    {
                        id: 3104,
                        name: "Romanian Deadlift",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 4,
                        reps: "8",
                        note: "Posterior chain volume. Hamstring and glute hypertrophy."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Intensity Build",
                duration: "Est. 85 min",
                exercises: [
                    {
                        id: 3105,
                        name: "Competition Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 5,
                        reps: "3",
                        note: "85% of 1RM. Building to heavy triples. Strict form."
                    },
                    {
                        id: 3106,
                        name: "Box Squat",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "2",
                        note: "80% of 1RM. Explosive concentric, posterior chain power."
                    },
                    {
                        id: 3107,
                        name: "Competition Bench Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 5,
                        reps: "3",
                        note: "85% of 1RM. Competition grip and setup."
                    },
                    {
                        id: 3108,
                        name: "Close Grip Bench",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "5",
                        note: "75% of 1RM. Tricep emphasis for lockout strength."
                    }
                ]
            },
            {
                phaseName: "Phase 3: Competition Peak",
                duration: "Est. 75 min",
                exercises: [
                    {
                        id: 3109,
                        name: "Competition Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 3,
                        reps: "1-2",
                        note: "92-95% of 1RM. Singles and doubles. Competition commands."
                    },
                    {
                        id: 3110,
                        name: "Competition Bench Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 3,
                        reps: "1-2",
                        note: "92-95% of 1RM. Practice pause on chest. Competition setup."
                    },
                    {
                        id: 3111,
                        name: "Competition Deadlift",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 3,
                        reps: "1",
                        note: "95% of 1RM. Heavy singles. Perfect technique only."
                    }
                ]
            }
        ]
    },
    {
        id: 17,
        title: "Deadlift Dominance",
        slug: "deadlift-dominance",
        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400",

        meta: {
            days: 8,
            goal: "Strength",
            muscle: "Back",
            equipment: "Barbell",
            level: "Advanced",
            author: "Dan Green",
            rating: 4.8,
            reviews: 634
        },

        description: `
    <p><strong>The Philosophy:</strong> Deadlift Dominance is a specialized program dedicated to maximizing your deadlift through high-frequency pulling, posterior chain development, and grip strength optimization. The deadlift is unique among the big three lifts because it has no eccentric loading phase and minimal stored elastic energy—it's pure concentric strength from a dead stop. This program employs multiple deadlift variations, heavy partial movements, and strategic accessory work to target every limiting factor: starting strength off the floor, lockout power, grip endurance, and spinal stabilization. Elite deadlifters understand that the deadlift responds exceptionally well to frequency when volume is managed intelligently and variations are programmed strategically.</p>
    <br/>
    <p><strong>Who is this for?</strong> This program is for experienced lifters who want to specialize in deadlift performance, whether for powerlifting competition, overall strength development, or breaking through a deadlift plateau. Ideal for athletes with a solid foundation in conventional or sumo deadlift technique who are ready to dedicate focused training cycles to pulling strength. You should be comfortable with heavy loads (85%+ of max), have no lower back injuries, and possess the work capacity to handle high-frequency deadlift training. This program is also excellent for those who consistently struggle with lockout strength or speed off the floor and need targeted intervention to address specific weaknesses in their pull.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 - Technical Foundation:</strong> Moderate intensity pulling (70-80%) with emphasis on perfect positioning, bar path, and speed development. Building frequency tolerance and motor patterns.</li>
      <li><strong>Phase 2 - Weak Point Attack:</strong> Specialized variations targeting common sticking points—deficit deadlifts for floor speed, block pulls for lockout strength, plus heavy grip and upper back work.</li>
      <li><strong>Phase 3 - Peak Performance:</strong> Heavy competition-style pulls (85-100%), CNS adaptation to maximal loads, and strategic tapering to express peak deadlift strength.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Phase 1: Technical Foundation",
                duration: "Est. 70 min",
                exercises: [
                    {
                        id: 3201,
                        name: "Competition Deadlift",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 6,
                        reps: "3",
                        note: "75% of 1RM. Speed work. 1 second up, immediate reset."
                    },
                    {
                        id: 3202,
                        name: "Romanian Deadlift",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 4,
                        reps: "6",
                        note: "65% of deadlift max. Eccentric control, hamstring stretch."
                    },
                    {
                        id: 3203,
                        name: "Bent Over Barbell Row",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "8",
                        note: "Upper back thickness. Support deadlift lockout."
                    },
                    {
                        id: 3204,
                        name: "Barbell Shrugs",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 3,
                        reps: "10",
                        note: "Heavy. Trap development for lockout position."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Weak Point Attack",
                duration: "Est. 80 min",
                exercises: [
                    {
                        id: 3205,
                        name: "Deficit Deadlift",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 5,
                        reps: "3",
                        note: "75% on 2-inch deficit. Overload starting position strength."
                    },
                    {
                        id: 3206,
                        name: "Block Pull",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 4,
                        reps: "2",
                        note: "95-105% from mid-shin. Lockout overload, supramaximal loading."
                    },
                    {
                        id: 3207,
                        name: "Paused Deadlift",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 4,
                        reps: "2",
                        note: "80% of 1RM. 2-second pause at knee level. Eliminate momentum."
                    },
                    {
                        id: 3208,
                        name: "Double Overhand Deadlift Hold",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "Max hold",
                        note: "85% of 1RM. Build crushing grip strength."
                    }
                ]
            },
            {
                phaseName: "Phase 3: Peak Performance",
                duration: "Est. 65 min",
                exercises: [
                    {
                        id: 3209,
                        name: "Competition Deadlift",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 5,
                        reps: "1",
                        note: "90-100% of 1RM. Heavy singles. Competition setup and commands."
                    },
                    {
                        id: 3210,
                        name: "Speed Deadlift",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 6,
                        reps: "1",
                        note: "65% of 1RM. Explosive reps, maintain bar speed."
                    },
                    {
                        id: 3211,
                        name: "Rack Pull",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 3,
                        reps: "3",
                        note: "90% from knee height. Lockout confidence at heavy weight."
                    }
                ]
            }
        ]
    },
    {
        id: 18,
        title: "Squat Mastery",
        slug: "squat-mastery",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=400",

        meta: {
            days: 10,
            goal: "Strength",
            muscle: "Lower Body",
            equipment: "Barbell",
            level: "Advanced",
            author: "Brandon Lilly",
            rating: 4.9,
            reviews: 758
        },

        description: `
    <p><strong>The Philosophy:</strong> Squat Mastery is an intensive specialization program designed to build a competition-ready squat through high-frequency training, systematic overload, and comprehensive leg development. The squat is often called the king of lifts for good reason—it requires full-body coordination, tremendous core stability, optimal mobility, and psychological fortitude. This program utilizes multiple squat variations at different intensities throughout the week to provide the frequency needed for technical mastery while managing fatigue through strategic variation in loading patterns, bar positions, and ranges of motion. The result is neurological efficiency, structural adaptation, and confidence under heavy loads.</p>
    <br/>
    <p><strong>Who is this for?</strong> This program is built for serious strength athletes with established squat proficiency who are ready to take their squat to elite levels. You should have at least 18 months of consistent squatting experience, be able to perform full-depth squats with excellent technique, and possess the mobility to hit proper depth without compromising spinal position. Ideal for powerlifters in off-season training blocks, strength athletes building their base, or dedicated lifters who want to specialize in squat development for 8-12 weeks. You must be prepared for high training volumes, frequent heavy loading, and the mental challenge of squatting multiple times per week while managing recovery demands through nutrition, sleep, and stress management.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 - Volume Foundation:</strong> High-frequency squatting (3-4x/week) at moderate intensities (65-80%) using various bar positions and tempos to build work capacity and movement quality.</li>
      <li><strong>Phase 2 - Strength Development:</strong> Progressive overload from 80-90% with reduced frequency, focusing on heavy back squats while maintaining volume through assistance variations.</li>
      <li><strong>Phase 3 - Maximal Expression:</strong> Peak intensity work (90-100%), CNS priming, and technical refinement to test new squat PRs with optimal readiness.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Phase 1: Volume Foundation",
                duration: "Est. 85 min",
                exercises: [
                    {
                        id: 3301,
                        name: "High Bar Back Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 5,
                        reps: "5",
                        note: "75% of 1RM. Upright torso, quad emphasis, full depth."
                    },
                    {
                        id: 3302,
                        name: "Tempo Squat",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "4",
                        note: "70% of 1RM. 4-second eccentric, 1-second pause, explosive up."
                    },
                    {
                        id: 3303,
                        name: "Front Squat",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 4,
                        reps: "6",
                        note: "75% of front squat max. Core stability, thoracic position."
                    },
                    {
                        id: 3304,
                        name: "Bulgarian Split Squat",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 3,
                        reps: "8/leg",
                        note: "Unilateral strength, address imbalances."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Strength Development",
                duration: "Est. 80 min",
                exercises: [
                    {
                        id: 3305,
                        name: "Competition Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 5,
                        reps: "3",
                        note: "85% of 1RM. Competition depth and commands. Heavy triples."
                    },
                    {
                        id: 3306,
                        name: "Pause Squat",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "3",
                        note: "75% of 1RM. 3-second pause. Eliminate bounce reflex."
                    },
                    {
                        id: 3307,
                        name: "Safety Squat Bar Squat",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 4,
                        reps: "5",
                        note: "80% of SSB max. Upper back loading, reduced shoulder stress."
                    },
                    {
                        id: 3308,
                        name: "Belt Squat",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 3,
                        reps: "10",
                        note: "Leg volume without spinal loading. Recovery-friendly."
                    }
                ]
            },
            {
                phaseName: "Phase 3: Maximal Expression",
                duration: "Est. 70 min",
                exercises: [
                    {
                        id: 3309,
                        name: "Competition Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 4,
                        reps: "1-2",
                        note: "92-100% of 1RM. Singles and doubles. Perfect execution."
                    },
                    {
                        id: 3310,
                        name: "Pin Squat",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "2",
                        note: "85% from parallel. Eliminate stretch reflex, pure strength."
                    },
                    {
                        id: 3311,
                        name: "Front Squat",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 3,
                        reps: "3",
                        note: "80% of front squat max. Maintain quad strength while peaking."
                    }
                ]
            }
        ]
    },
    {
        id: 19,
        title: "Bench Press Revolution",
        slug: "bench-press-revolution",
        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?auto=format&fit=crop&w=400",

        meta: {
            days: 9,
            goal: "Strength",
            muscle: "Upper Body",
            equipment: "Barbell",
            level: "Advanced",
            author: "Jennifer Thompson",
            rating: 4.8,
            reviews: 612
        },

        description: `
    <p><strong>The Philosophy:</strong> Bench Press Revolution is a high-frequency pressing program that systematically builds upper body pressing strength through strategic variation, progressive overload, and comprehensive shoulder girdle development. The bench press is a highly technical lift that responds exceptionally well to frequency when programmed intelligently. This program employs multiple pressing variations, grip widths, and equipment to address every aspect of bench press performance: leg drive, arch position, bar path efficiency, shoulder health, tricep lockout strength, and pec development. By benching 3-4 times per week with varying intensities and grips, we maximize motor learning while distributing volume to prevent overuse injuries.</p>
    <br/>
    <p><strong>Who is this for?</strong> This program is designed for experienced lifters who want to specialize in bench press performance, whether for powerlifting competition, upper body strength development, or breaking through persistent pressing plateaus. You should have at least 12 months of consistent bench pressing experience, understand proper setup and leg drive technique, and possess healthy shoulders without current injuries. Ideal for competitive powerlifters, strength athletes needing superior pressing power, or dedicated lifters ready to commit to high-frequency pressing while managing recovery through proper programming. You must be comfortable with the technical demands of bench pressing and willing to address mobility limitations that may restrict optimal positioning.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 - Technical Volume:</strong> High-frequency pressing (4x/week) at moderate loads (70-80%) using various grips, pause work, and speed training to refine technique and build pressing endurance.</li>
      <li><strong>Phase 2 - Strength Intensification:</strong> Progressive loading from 80-90% with focus on competition-style benching, supplemented by close grip and board press work to strengthen lockout mechanics.</li>
      <li><strong>Phase 3 - Competition Peaking:</strong> Maximal loads (90-100%), reduced volume, CNS optimization, and technical perfection to achieve peak bench press performance.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Phase 1: Technical Volume",
                duration: "Est. 75 min",
                exercises: [
                    {
                        id: 3401,
                        name: "Competition Bench Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 5,
                        reps: "5",
                        note: "75% of 1RM. Competition grip, pause on chest, explosive press."
                    },
                    {
                        id: 3402,
                        name: "Close Grip Bench Press",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "6",
                        note: "70% of 1RM. Hands shoulder-width. Tricep emphasis."
                    },
                    {
                        id: 3403,
                        name: "Spoto Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 4,
                        reps: "5",
                        note: "65% of 1RM. Stop 1 inch from chest. Eliminate momentum."
                    },
                    {
                        id: 3404,
                        name: "Overhead Press",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 3,
                        reps: "8",
                        note: "Strict press. Shoulder health and anterior delt strength."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Strength Intensification",
                duration: "Est. 80 min",
                exercises: [
                    {
                        id: 3405,
                        name: "Competition Bench Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 5,
                        reps: "3",
                        note: "85% of 1RM. Heavy triples. Full competition setup."
                    },
                    {
                        id: 3406,
                        name: "3-Board Press",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "3",
                        note: "95% of 1RM. Overload lockout, build tricep strength."
                    },
                    {
                        id: 3407,
                        name: "Paused Bench Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 4,
                        reps: "4",
                        note: "75% of 1RM. 2-second pause. Build starting strength."
                    },
                    {
                        id: 3408,
                        name: "Wide Grip Bench Press",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "6",
                        note: "Pinkies on rings. Pec development and stretch."
                    }
                ]
            },
            {
                phaseName: "Phase 3: Competition Peaking",
                duration: "Est. 65 min",
                exercises: [
                    {
                        id: 3409,
                        name: "Competition Bench Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 4,
                        reps: "1-2",
                        note: "92-100% of 1RM. Singles and doubles with commands."
                    },
                    {
                        id: 3410,
                        name: "2-Board Press",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "2",
                        note: "100-105% of 1RM. Supramaximal loading for CNS."
                    },
                    {
                        id: 3411,
                        name: "Speed Bench Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 6,
                        reps: "3",
                        note: "60% of 1RM. Explosive reps. Maintain bar speed."
                    }
                ]
            }
        ]
    },

    {
        id: 20,
        title: "Total Strength Elite",
        slug: "total-strength-elite",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400",

        meta: {
            days: 16,
            goal: "Strength",
            muscle: "Full Body",
            equipment: "Barbell",
            level: "Advanced",
            author: "Louie Simmons",
            rating: 4.9,
            reviews: 1247
        },

        description: `
    <p><strong>The Philosophy:</strong> Total Strength Elite is the ultimate powerlifting program that integrates all three competition lifts into a comprehensive, periodized training system designed to maximize your total (squat + bench + deadlift). This program is built on the conjugate method philosophy—systematic rotation of exercises, strategic use of maximal effort and dynamic effort days, and comprehensive weak point training to build balanced, explosive strength across all movement patterns. By training all lifts within the same mesocycle while managing fatigue through intelligent exercise selection and intensity distribution, we create synergistic strength gains that exceed what specialized single-lift programs can achieve. This is championship-level programming for serious strength athletes.</p>
    <br/>
    <p><strong>Who is this for?</strong> This program is exclusively for advanced lifters with 3+ years of consistent powerlifting training experience and established technical proficiency in all three competition lifts. You should be comfortable working at 90%+ of your max regularly, understand RPE (Rate of Perceived Exertion) principles, and be committed to a high-frequency, high-intensity training schedule. This is not a beginner program; it requires a high degree of body awareness, recovery discipline, and a willingness to push past comfort zones.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 - Max Effort/Dynamic Effort Introduction:</strong> Establish a rotation of max effort and dynamic effort days for all three lifts. Focus on technical consistency and building work capacity for the high-frequency approach.</li>
      <li><strong>Phase 2 - Weak Point Specialization:</strong> Introduce specialized bars, accommodating resistance (bands/chains), and targeted accessory work to address individual sticking points in the squat, bench, and deadlift.</li>
      <li><strong>Phase 3 - Competition Peak:</strong> Tapering volume while maintaining intensity, focusing on competition-style lifts, and maximizing central nervous system (CNS) readiness for a new total personal record.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Phase 1: Max Effort/Dynamic Effort Introduction",
                duration: "Est. 90 min",
                exercises: [
                    {
                        id: 3501,
                        name: "Max Effort Squat Variation",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 5,
                        reps: "1",
                        note: "Work up to a 1-rep max on a box squat or safety bar squat. Rotate weekly."
                    },
                    {
                        id: 3502,
                        name: "Dynamic Effort Bench Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 9,
                        reps: "3",
                        note: "60% of 1RM. Use bands or chains. Focus on maximal bar speed."
                    },
                    {
                        id: 3503,
                        name: "Glute Ham Raise",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "10",
                        note: "Hamstring and posterior chain development. Controlled eccentric."
                    },
                    {
                        id: 3504,
                        name: "Lat Pulldown",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 4,
                        reps: "12",
                        note: "Upper back thickness for squat and deadlift stability."
                    }
                ]
            },
            {
                phaseName: "Phase 2: Weak Point Specialization",
                duration: "Est. 100 min",
                exercises: [
                    {
                        id: 3505,
                        name: "Max Effort Deadlift Variation",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 5,
                        reps: "1",
                        note: "Work up to a 1-rep max on a rack pull or deficit deadlift. Rotate weekly."
                    },
                    {
                        id: 3506,
                        name: "Dynamic Effort Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 12,
                        reps: "2",
                        note: "50% of 1RM. Use bands or chains. Focus on explosive concentric."
                    },
                    {
                        id: 3507,
                        name: "Floor Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 4,
                        reps: "5",
                        note: "Tricep and lockout strength. Eliminate leg drive."
                    },
                    {
                        id: 3508,
                        name: "Reverse Hyperextension",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "15",
                        note: "Lower back and glute recovery and strength."
                    }
                ]
            },
            {
                phaseName: "Phase 3: Competition Peak",
                duration: "Est. 75 min",
                exercises: [
                    {
                        id: 3509,
                        name: "Competition Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 3,
                        reps: "1",
                        note: "90-95% of 1RM. Single reps with full competition setup and commands."
                    },
                    {
                        id: 3510,
                        name: "Competition Bench Press",
                        image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=300",
                        sets: 3,
                        reps: "1",
                        note: "90-95% of 1RM. Single reps with full competition pause and commands."
                    },
                    {
                        id: 3511,
                        name: "Competition Deadlift",
                        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=300",
                        sets: 3,
                        reps: "1",
                        note: "90-95% of 1RM. Single reps. Focus on perfect form and speed."
                    }
                ]
            }
        ]
    },

    {
        id: 21,
        title: "The Engine Builder",
        slug: "the-engine-builder",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400",

        meta: {
            days: 5,
            goal: "Endurance",
            muscle: "Full Body",
            equipment: "Functional Gym",
            level: "Advanced",
            author: "Jason Cross",
            rating: 4.8,
            reviews: 310
        },

        description: `
    <p><strong>The Philosophy:</strong> Building a powerful aerobic engine requires intelligent programming that balances intensity, volume, and recovery. This program focuses on developing both your aerobic base and anaerobic threshold through carefully structured intervals, tempo work, and metabolic conditioning. You'll develop the work capacity needed to sustain high-intensity efforts while improving recovery between efforts. The mental fortitude gained from pushing through challenging workouts translates directly to competition performance.</p>
    <br/>
    <p><strong>Who is this for?</strong> Athletes looking to elevate their conditioning to elite levels, competitive CrossFit athletes preparing for competitions, hybrid athletes who combine strength and endurance training, and anyone wanting to build an unbreakable cardiovascular foundation. This program demands commitment and the ability to embrace discomfort.</p>
    <br/>
    <p><strong>Phase Breakdown:</strong></p>
    <ul>
      <li><strong>Phase 1 (Week 1-4: Base Building):</strong> Focus on aerobic capacity with longer duration efforts at moderate intensity. Building the foundation for all energy systems.</li>
      <li><strong>Phase 2 (Week 5-8: Threshold Development):</strong> Increasing intensity to develop anaerobic threshold. Learning to sustain uncomfortable paces.</li>
      <li><strong>Phase 3 (Week 9-12: Peak Performance):</strong> High-intensity intervals and competition simulation workouts to bring everything together.</li>
    </ul>
  `,

        schedule: [
            {
                phaseName: "Week 1-4: Aerobic Base Building",
                duration: "Est. 60 min",
                exercises: [
                    {
                        id: 4101,
                        name: "Assault Bike Intervals",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 6,
                        reps: "3 min work / 2 min rest",
                        note: "Maintain 70% effort. Focus on consistent pacing across all intervals."
                    },
                    {
                        id: 4102,
                        name: "Rowing Machine Steady State",
                        image: "https://images.unsplash.com/photo-1591940742878-13aba4b647c8?w=300",
                        sets: 1,
                        reps: "5000m",
                        note: "Target 2:00-2:10/500m split. Controlled breathing, long powerful strokes."
                    },
                    {
                        id: 4103,
                        name: "Kettlebell Swings",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 5,
                        reps: "30 reps",
                        note: "Rest 90 seconds between sets. Explosive hip drive, full extension."
                    },
                    {
                        id: 4104,
                        name: "Ski Erg Intervals",
                        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300",
                        sets: 8,
                        reps: "1 min work / 1 min rest",
                        note: "Maintain consistent wattage. Focus on core engagement."
                    }
                ]
            },
            {
                phaseName: "Week 5-8: Threshold Development",
                duration: "Est. 65 min",
                exercises: [
                    {
                        id: 4105,
                        name: "EMOM Kettlebell Complex",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 1,
                        reps: "20 min EMOM",
                        note: "5 Cleans + 5 Front Squats + 5 Push Press per minute. Scale weight as needed."
                    },
                    {
                        id: 4106,
                        name: "Running Intervals",
                        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=300",
                        sets: 8,
                        reps: "400m at 85% effort",
                        note: "Rest 90 seconds between intervals. Focus on consistent split times."
                    },
                    {
                        id: 4107,
                        name: "Battle Ropes Tabata",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 8,
                        reps: "20 sec work / 10 sec rest",
                        note: "Maximum intensity during work intervals. Alternating waves pattern."
                    },
                    {
                        id: 4108,
                        name: "Burpee Box Jump Overs",
                        image: "https://images.unsplash.com/photo-1599058917727-df1fc82dc5a5?w=300",
                        sets: 5,
                        reps: "15 reps",
                        note: "Rest 2 minutes between sets. Full chest to ground on burpees."
                    }
                ]
            }
        ]
    },
    {
        id: 22,
        title: "Metcon Massacre",
        slug: "metcon-massacre",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400",

        meta: {
            days: 6,
            goal: "Fat Loss",
            muscle: "Full Body",
            equipment: "Functional Gym",
            level: "Advanced",
            author: "Sarah Warrior",
            rating: 4.9,
            reviews: 427
        },

        description: `
    <p><strong>The Philosophy:</strong> Metabolic conditioning workouts are the ultimate test of physical and mental resilience. This program employs varied time domains, movement patterns, and loading schemes to challenge every energy system. Through AMRAP workouts, chipper-style sessions, and brutal EMOM sequences, you'll develop the ability to sustain high power output under fatigue. The constantly varied nature prevents adaptation and keeps your body guessing, leading to superior conditioning gains and body composition changes.</p>
    <br/>
    <p><strong>Who is this for?</strong> Competitive CrossFit athletes preparing for the Open or regional competitions, fitness enthusiasts who thrive on high-intensity challenges, athletes transitioning from traditional sports to functional fitness, and those seeking maximum calorie burn and body recomposition. This program requires prior conditioning experience and solid movement mechanics.</p>
    <br/>
    <p><strong>Training Philosophy:</strong> Each session features a different metabolic conditioning protocol. You'll experience classic CrossFit benchmark workouts (modified for progression), custom WODs designed to attack weaknesses, and skill-building sessions to improve movement efficiency under fatigue. The variety ensures comprehensive development while preventing overuse injuries.</p>
    <br/>
    <p><strong>Expected Outcomes:</strong> Dramatically improved work capacity, enhanced body composition, superior cardiovascular fitness, increased mental toughness, and the confidence to tackle any physical challenge thrown your way.</p>
  `,

        schedule: [
            {
                phaseName: "Week 1-3: Foundation Metcons",
                duration: "Est. 45 min",
                exercises: [
                    {
                        id: 4109,
                        name: "AMRAP 20: The Grind",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 1,
                        reps: "20 min AMRAP",
                        note: "10 Wall Balls (20/14 lb) + 10 Box Jumps (24/20 in) + 10 KB Swings (53/35 lb) + 200m Run"
                    },
                    {
                        id: 4110,
                        name: "Death by Thrusters",
                        image: "https://images.unsplash.com/photo-1584735175315-9d5df23860bc?w=300",
                        sets: 1,
                        reps: "EMOM until failure",
                        note: "Start with 1 thruster minute 1, add 1 rep each minute. Use 95/65 lb barbell."
                    },
                    {
                        id: 4111,
                        name: "Chipper: The Long Haul",
                        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300",
                        sets: 1,
                        reps: "For time",
                        note: "50 Burpees + 400m Run + 40 KB Swings + 30 Box Jumps + 20 Pull-ups + 10 Devils Press"
                    },
                    {
                        id: 4112,
                        name: "Rowing Pyramid",
                        image: "https://images.unsplash.com/photo-1591940742878-13aba4b647c8?w=300",
                        sets: 1,
                        reps: "100-200-300-400-300-200-100m",
                        note: "Rest equal time to work. Maintain consistent pace throughout."
                    }
                ]
            },
            {
                phaseName: "Week 4-6: Advanced WOD Protocols",
                duration: "Est. 50 min",
                exercises: [
                    {
                        id: 4113,
                        name: "Fran (Modified)",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 1,
                        reps: "21-15-9 for time",
                        note: "Thrusters (95/65 lb) + Pull-ups. Break strategically, move fast."
                    },
                    {
                        id: 4114,
                        name: "EMOM 24: Triple Threat",
                        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300",
                        sets: 1,
                        reps: "24 min EMOM",
                        note: "Min 1: 15 Cal Assault Bike / Min 2: 12 DB Snatches / Min 3: 20 Double Unders"
                    },
                    {
                        id: 4115,
                        name: "Tabata Hell",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 8,
                        reps: "20 sec work / 10 sec rest",
                        note: "Alternate between Battle Ropes and Burpees. Total: 4 rounds each movement."
                    },
                    {
                        id: 4116,
                        name: "Hero WOD: DT (Scaled)",
                        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300",
                        sets: 5,
                        reps: "12-9-6 reps per round",
                        note: "Deadlifts + Hang Power Cleans + Push Jerks (155/105 lb). Rest 90 sec between rounds."
                    }
                ]
            }
        ]
    },
    {
        id: 23,
        title: "Hyrox Warrior Prep",
        slug: "hyrox-warrior-prep",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=400",

        meta: {
            days: 5,
            goal: "Endurance",
            muscle: "Full Body",
            equipment: "Minimal",
            level: "Intermediate",
            author: "Marcus Enduro",
            rating: 4.7,
            reviews: 268
        },

        description: `
    <p><strong>The Philosophy:</strong> Hybrid racing events like Hyrox demand a unique blend of running endurance and functional strength. This program specifically prepares you for the demands of running 8km while completing eight different functional fitness stations. The training mimics race conditions by combining running intervals with strength movements performed under fatigue. You'll develop the specific energy systems and movement patterns required to excel in this emerging sport.</p>
    <br/>
    <p><strong>Who is this for?</strong> Athletes preparing for Hyrox competitions or similar hybrid racing events, runners looking to add strength and variety to their training, CrossFit athletes wanting to improve endurance, and fitness enthusiasts seeking a structured goal-oriented program. This program suits those comfortable with both running and basic functional movements.</p>
    <br/>
    <p><strong>Race-Specific Training:</strong> Each workout simulates aspects of the Hyrox race format. You'll practice transitioning from running to strength stations, develop pacing strategies for sustained efforts, and build the muscular endurance needed for movements like sled pushes, burpee broad jumps, and wall balls performed after significant running volume.</p>
    <br/>
    <p><strong>Progression Model:</strong> The program progresses from building individual capacities (running speed, strength endurance) to combining them in race-simulation workouts that mirror actual competition demands.</p>
  `,

        schedule: [
            {
                phaseName: "Week 1-4: Hybrid Conditioning Base",
                duration: "Est. 55 min",
                exercises: [
                    {
                        id: 4117,
                        name: "Run + Ski Erg Combo",
                        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300",
                        sets: 4,
                        reps: "1km run + 1000m Ski Erg",
                        note: "Rest 3 min between rounds. Maintain consistent pace on both modalities."
                    },
                    {
                        id: 4118,
                        name: "Sled Push Intervals",
                        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300",
                        sets: 8,
                        reps: "50m heavy sled push",
                        note: "Rest 90 seconds. Focus on driving through legs, staying low."
                    },
                    {
                        id: 4119,
                        name: "Burpee Broad Jumps",
                        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300",
                        sets: 5,
                        reps: "10 reps",
                        note: "Rest 2 min between sets. Full chest to ground, explosive jump forward."
                    },
                    {
                        id: 4120,
                        name: "Wall Ball Endurance",
                        image: "https://images.unsplash.com/photo-1599058917727-df1fc82dc5a5?w=300",
                        sets: 4,
                        reps: "75 reps unbroken",
                        note: "Rest 3 min between sets. Focus on rhythm and breathing pattern."
                    }
                ]
            },
            {
                phaseName: "Week 5-8: Race Simulation",
                duration: "Est. 70 min",
                exercises: [
                    {
                        id: 4121,
                        name: "Mini Hyrox Simulation",
                        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=300",
                        sets: 1,
                        reps: "Complete for time",
                        note: "1km Run + 1000m Ski Erg + 1km Run + 50m Sled Push + 1km Run + 50 Burpee Broad Jumps"
                    },
                    {
                        id: 4122,
                        name: "Farmers Carry Intervals",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 6,
                        reps: "100m heavy carry",
                        note: "Rest 90 seconds. Maintain upright posture, tight grip."
                    },
                    {
                        id: 4123,
                        name: "Rowing + Lunges Complex",
                        image: "https://images.unsplash.com/photo-1591940742878-13aba4b647c8?w=300",
                        sets: 5,
                        reps: "500m row + 100m walking lunges",
                        note: "Rest 2 min between rounds. Transition quickly between movements."
                    },
                    {
                        id: 4124,
                        name: "Sandbag Lunges",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 4,
                        reps: "100m",
                        note: "Rest 3 min. Heavy sandbag on shoulders, alternating legs."
                    }
                ]
            }
        ]
    },
    {
        id: 24,
        title: "Kettlebell Cardio Crusher",
        slug: "kettlebell-cardio-crusher",
        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=400",

        meta: {
            days: 4,
            goal: "Fat Loss",
            muscle: "Full Body",
            equipment: "Kettlebells",
            level: "Intermediate",
            author: "Dimitri Strength",
            rating: 4.8,
            reviews: 392
        },

        description: `
    <p><strong>The Philosophy:</strong> Kettlebells are the ultimate tool for combining strength and cardiovascular conditioning in a single session. This program leverages kettlebell-specific movements like swings, snatches, cleans, and Turkish get-ups to build explosive power while simultaneously challenging your aerobic and anaerobic energy systems. The ballistic nature of kettlebell training creates a unique metabolic demand that torches calories during and after your workout through elevated EPOC (excess post-exercise oxygen consumption).</p>
    <br/>
    <p><strong>Who is this for?</strong> Home gym enthusiasts with limited equipment, athletes seeking powerful hip extension and core strength, those looking for time-efficient fat loss workouts, and lifters wanting to add conditioning without losing muscle mass. This program requires proficiency in basic kettlebell movements or willingness to learn proper technique.</p>
    <br/>
    <p><strong>Movement Mastery:</strong> Before progressing to high-intensity protocols, you'll master fundamental kettlebell mechanics. Proper hip hinge, breathing patterns, and grip techniques are essential for both safety and effectiveness. The program includes technical practice sessions alongside conditioning work.</p>
    <br/>
    <p><strong>Training Structure:</strong> Sessions alternate between heavy ballistic work (swings, snatches) for power development and grind movements (presses, squats) for strength endurance. Complexes and circuits keep heart rate elevated while building work capacity across multiple movement patterns.</p>
  `,

        schedule: [
            {
                phaseName: "Week 1-3: Technical Foundation",
                duration: "Est. 40 min",
                exercises: [
                    {
                        id: 4125,
                        name: "Kettlebell Swing Ladder",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 1,
                        reps: "Ladder: 10-20-30-40-30-20-10",
                        note: "2-hand swings. Rest 30 sec between sets. Focus on hip snap, not arms."
                    },
                    {
                        id: 4126,
                        name: "Single Arm KB Snatch",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 5,
                        reps: "8 reps per arm",
                        note: "Rest 90 sec. Smooth arc overhead, lock out at top."
                    },
                    {
                        id: 4127,
                        name: "Goblet Squat Hold + Pulses",
                        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=300",
                        sets: 4,
                        reps: "20 sec hold + 15 pulses",
                        note: "Rest 60 sec. Deep squat position, chest up, elbows inside knees."
                    },
                    {
                        id: 4128,
                        name: "Turkish Get-Up",
                        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300",
                        sets: 3,
                        reps: "3 reps per side",
                        note: "Rest 2 min. Move slowly, maintain visual contact with kettlebell."
                    }
                ]
            },
            {
                phaseName: "Week 4-6: High-Intensity Complexes",
                duration: "Est. 45 min",
                exercises: [
                    {
                        id: 4129,
                        name: "Armor Building Complex",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 5,
                        reps: "2 Clean + 1 Press + 3 Squat (per arm)",
                        note: "Rest 2 min. Heavy weight, maintain perfect form throughout."
                    },
                    {
                        id: 4130,
                        name: "Swing + Snatch EMOM",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 1,
                        reps: "15 min EMOM",
                        note: "Minute 1: 15 two-hand swings / Minute 2: 5 snatches per arm / Minute 3: Rest"
                    },
                    {
                        id: 4131,
                        name: "Double KB Front Squat",
                        image: "https://images.unsplash.com/photo-1599058917727-df1fc82dc5a5?w=300",
                        sets: 5,
                        reps: "12 reps",
                        note: "Rest 90 sec. Rack position, elbows high, full depth."
                    },
                    {
                        id: 4132,
                        name: "KB Burpee Complex",
                        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300",
                        sets: 4,
                        reps: "10 reps",
                        note: "Burpee + KB Swing + KB Snatch (alternating arms). Rest 2 min."
                    }
                ]
            }
        ]
    },
    {
        id: 25,
        title: "Functional Beast Mode",
        slug: "functional-beast-mode",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400",

        meta: {
            days: 6,
            goal: "Endurance",
            muscle: "Full Body",
            equipment: "Functional Gym",
            level: "Advanced",
            author: "Coach Titan",
            rating: 4.9,
            reviews: 501
        },

        description: `
    <p><strong>The Philosophy:</strong> True functional fitness transcends specialization. This program develops comprehensive physical preparedness by attacking all ten general physical skills: cardiovascular endurance, stamina, strength, flexibility, power, speed, coordination, agility, balance, and accuracy. Through constantly varied functional movements performed at high intensity, you'll build a body capable of handling any physical challenge life throws at you. This is training for the unknown and unknowable—preparing you to excel in any athletic endeavor.</p>
    <br/>
    <p><strong>Who is this for?</strong> Elite-level CrossFit competitors seeking comprehensive programming, military and first responder candidates preparing for physical testing, former athletes returning to peak conditioning, and dedicated fitness enthusiasts committed to becoming the best version of themselves. This program demands six training days per week and unwavering mental commitment.</p>
    <br/>
    <p><strong>Programming Philosophy:</strong> Each microcycle targets different energy systems and movement patterns. Monday might feature heavy Olympic lifting followed by a short intense metcon, while Wednesday could be a longer aerobic session with gymnastic skill work. The variance prevents adaptation, reduces injury risk, and develops well-rounded athleticism. Recovery protocols and mobility work are integrated throughout.</p>
    <br/>
    <p><strong>Expected Transformation:</strong> Over 12 weeks, expect dramatic improvements in work capacity, body composition, movement quality, and mental resilience. You'll develop the confidence that comes from knowing your body is capable of extraordinary performance.</p>
  `,

        schedule: [
            {
                phaseName: "Week 1-4: Comprehensive Development",
                duration: "Est. 75 min",
                exercises: [
                    {
                        id: 4133,
                        name: "Olympic Lifting Complex",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 5,
                        reps: "3 Power Clean + 2 Front Squat + 1 Jerk",
                        note: "Build to heavy complex. Rest 3 min. Focus on bar path and timing."
                    },
                    {
                        id: 4134,
                        name: "Gymnastics Skill: Bar Muscle-Ups",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 5,
                        reps: "3-5 reps",
                        note: "Rest 2 min. Focus on kip timing and turnover. Scale to chest-to-bar pull-ups if needed."
                    },
                    {
                        id: 4135,
                        name: "Assault Runner Intervals",
                        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300",
                        sets: 10,
                        reps: "30 sec sprint / 30 sec rest",
                        note: "Maximum effort on sprints. Fight to maintain output across all sets."
                    },
                    {
                        id: 4136,
                        name: "Core Gauntlet",
                        image: "https://images.unsplash.com/photo-1599058917727-df1fc82dc5a5?w=300",
                        sets: 3,
                        reps: "Complex",
                        note: "20 GHD Sit-ups + 20 V-ups + 30 sec Hollow Hold + 10 Toes-to-Bar. Rest 90 sec."
                    }
                ]
            },
            {
                phaseName: "Week 5-8: Competition Prep",
                duration: "Est. 80 min",
                exercises: [
                    {
                        id: 4137,
                        name: "The Seven",
                        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300",
                        sets: 7,
                        reps: "7 rounds for time",
                        note: "7 Thrusters (135/95) + 7 Knees-to-Elbows + 7 Deadlifts (245/165) + 7 Burpees + 7 KB Swings + 7 Pull-ups. Hero WOD."
                    },
                    {
                        id: 4138,
                        name: "Snatch Complex + AMRAP",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 1,
                        reps: "Build to 1RM, then 8 min AMRAP",
                        note: "After finding 1RM Snatch, immediately into: 5 Hang Snatches (75% 1RM) + 10 Box Jump Overs"
                    },
                    {
                        id: 4139,
                        name: "Pegboard + Double-Unders",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 5,
                        reps: "1 ascent + 50 DU",
                        note: "Rest 2 min. Scale pegboard to rope climbs if needed."
                    },
                    {
                        id: 4140,
                        name: "Bike Erg Death March",
                        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300",
                        sets: 1,
                        reps: "100 calories for time",
                        note: "All-out effort. Your legs will beg for mercy. Track split times every 25 cals."
                    }
                ]
            }
        ]
    },

    {
        id: 26,
        title: "Absolute Beginner Start",
        slug: "absolute-beginner-start",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400",

        meta: {
            days: 3,
            goal: "General Fitness",
            muscle: "Full Body",
            equipment: "Beginner Friendly",
            level: "Beginner",
            author: "Emma Starter",
            rating: 4.9,
            reviews: 612
        },

        description: `
    <p><strong>Welcome to Your Fitness Journey:</strong> Starting a fitness routine can feel overwhelming, but this program is specifically designed for complete beginners who have little to no gym experience. We focus on building fundamental movement patterns, developing basic strength, and establishing sustainable exercise habits. The emphasis is on proper form over heavy weights, gradual progression over rushing results, and building confidence in the gym environment. Every exercise is scalable, and we prioritize low-impact movements that minimize injury risk while still delivering results.</p>
    <br/>
    <p><strong>Who is this for?</strong> Individuals new to structured exercise programs, those returning to fitness after extended time away, people recovering from sedentary lifestyles, anyone intimidated by traditional gym environments, and those who want to build a solid foundation before progressing to more advanced training. This program meets you exactly where you are.</p>
    <br/>
    <p><strong>What to Expect:</strong> Three manageable workouts per week, each lasting 30-40 minutes. You'll learn proper breathing techniques, body awareness, and how to listen to your body's signals. We incorporate rest days to allow for recovery and adaptation. The program uses a combination of machines (which provide stability and guided movement paths), bodyweight exercises, and light dumbbells.</p>
    <br/>
    <p><strong>Progressive Approach:</strong> Each week builds upon the previous one. Week 1-2 focuses on learning movements with lighter weights. Weeks 3-4 introduce slightly more volume and intensity. By weeks 5-8, you'll notice significant improvements in strength, confidence, and exercise tolerance. The program prepares you to transition to intermediate training.</p>
  `,

        schedule: [
            {
                phaseName: "Week 1-4: Movement Foundation",
                duration: "Est. 35 min",
                exercises: [
                    {
                        id: 4141,
                        name: "Leg Press Machine",
                        image: "https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Light weight. Feet shoulder-width apart. Push through full foot, don't lock knees at top."
                    },
                    {
                        id: 4142,
                        name: "Chest Press Machine",
                        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300",
                        sets: 3,
                        reps: "10 reps",
                        note: "Adjust seat so handles align with mid-chest. Controlled movement in both directions."
                    },
                    {
                        id: 4143,
                        name: "Assisted Pull-up Machine",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 3,
                        reps: "8 reps",
                        note: "Use assistance weight that allows full range of motion. Focus on pulling shoulder blades down and back."
                    },
                    {
                        id: 4144,
                        name: "Bodyweight Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 3,
                        reps: "15 reps",
                        note: "Stand with feet hip-width apart. Sit back like sitting in chair. Keep chest up, knees tracking over toes."
                    },
                    {
                        id: 4145,
                        name: "Dumbbell Shoulder Press (Seated)",
                        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=300",
                        sets: 3,
                        reps: "10 reps",
                        note: "Light dumbbells (5-10 lbs). Press straight overhead, don't arch back excessively."
                    },
                    {
                        id: 4146,
                        name: "Plank Hold",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "20-30 seconds",
                        note: "On forearms or hands. Keep body in straight line from head to heels. Breathe normally."
                    }
                ]
            },
            {
                phaseName: "Week 5-8: Building Confidence",
                duration: "Est. 40 min",
                exercises: [
                    {
                        id: 4147,
                        name: "Goblet Squat",
                        image: "https://images.unsplash.com/photo-1599058917727-df1fc82dc5a5?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Hold light dumbbell at chest. Squat deeper than bodyweight version. Elbows between knees at bottom."
                    },
                    {
                        id: 4148,
                        name: "Lat Pulldown Machine",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Wide grip. Pull bar to upper chest, squeeze shoulder blades together at bottom."
                    },
                    {
                        id: 4149,
                        name: "Dumbbell Romanian Deadlift",
                        image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=300",
                        sets: 3,
                        reps: "10 reps",
                        note: "Light dumbbells. Hinge at hips, keep back flat, feel stretch in hamstrings. Don't round back."
                    },
                    {
                        id: 4150,
                        name: "Incline Dumbbell Press",
                        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300",
                        sets: 3,
                        reps: "10 reps",
                        note: "Bench at 30-45 degree angle. Press dumbbells up and slightly together at top."
                    },
                    {
                        id: 4151,
                        name: "Walking (Treadmill)",
                        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300",
                        sets: 1,
                        reps: "10 minutes",
                        note: "Moderate pace. Optional slight incline (2-4%). Cool down and recovery component."
                    }
                ]
            }
        ]
    },
    {
        id: 27,
        title: "Glute & Leg Sculptor",
        slug: "glute-leg-sculptor",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400",

        meta: {
            days: 4,
            goal: "Muscle Gain",
            muscle: "Legs & Glutes",
            equipment: "Full Gym",
            level: "Intermediate",
            author: "Sophia Sculpt",
            rating: 4.8,
            reviews: 489
        },

        description: `
    <p><strong>The Science of Lower Body Development:</strong> Building shapely, powerful legs and glutes requires strategic exercise selection, targeted volume, and progressive overload. This program emphasizes compound movements that recruit maximum muscle fibers while incorporating isolation exercises to target specific areas for aesthetic development. We utilize various rep ranges—from heavy compound lifts (6-8 reps) for overall mass to higher-rep pump work (15-20 reps) for metabolic stress and muscle definition. The glutes respond exceptionally well to varied stimuli including horizontal loading (hip thrusts), vertical loading (squats), and rotational movements (cable kickbacks).</p>
    <br/>
    <p><strong>Who is this for?</strong> Individuals focused on lower body aesthetic development, athletes wanting to build powerful legs and glutes, those looking to improve lower body proportions and symmetry, and anyone committed to structured leg-focused training. This program suits intermediate lifters comfortable with free weights and machines who can maintain proper form under fatigue.</p>
    <br/>
    <p><strong>Training Split Philosophy:</strong> Four leg-focused sessions per week targeting different movement patterns and muscle groups. Day 1 focuses on quad-dominant movements, Day 2 emphasizes glute and hamstring development, Day 3 targets glute activation and pump work, and Day 4 combines everything for total lower body conditioning. This split allows adequate recovery while maintaining high training frequency.</p>
    <br/>
    <p><strong>Expected Results:</strong> Visible improvements in glute development and leg definition within 4-6 weeks. Increased strength in major lifts like squats and deadlifts. Enhanced muscle tone, better lower body proportions, and improved athletic performance. Progress photos every 4 weeks recommended to track aesthetic changes.</p>
  `,

        schedule: [
            {
                phaseName: "Week 1-4: Quad Dominant Focus",
                duration: "Est. 60 min",
                exercises: [
                    {
                        id: 4152,
                        name: "Barbell Back Squat",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 4,
                        reps: "8-10 reps",
                        note: "Primary quad builder. Bar position slightly higher for quad emphasis. Control descent, explosive drive up."
                    },
                    {
                        id: 4153,
                        name: "Bulgarian Split Squat",
                        image: "https://images.unsplash.com/photo-1599058917727-df1fc82dc5a5?w=300",
                        sets: 3,
                        reps: "12 reps per leg",
                        note: "Rear foot elevated. Torso upright for quad focus. Dumbbells in hands or barbell on back."
                    },
                    {
                        id: 4154,
                        name: "Leg Press (Narrow Stance)",
                        image: "https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?w=300",
                        sets: 4,
                        reps: "12-15 reps",
                        note: "Feet closer together, positioned lower on platform. Full range of motion, controlled negative."
                    },
                    {
                        id: 4155,
                        name: "Walking Lunges",
                        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300",
                        sets: 3,
                        reps: "20 steps per leg",
                        note: "Dumbbells in hands. Step far enough forward so front knee doesn't pass toes. Drive through front heel."
                    },
                    {
                        id: 4156,
                        name: "Leg Extension",
                        image: "https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?w=300",
                        sets: 3,
                        reps: "15-20 reps",
                        note: "Isolation finisher. Squeeze hard at top, control the weight down. Focus on quad contraction."
                    }
                ]
            },
            {
                phaseName: "Week 5-8: Glute & Hamstring Emphasis",
                duration: "Est. 65 min",
                exercises: [
                    {
                        id: 4157,
                        name: "Barbell Hip Thrust",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 4,
                        reps: "10-12 reps",
                        note: "King of glute exercises. Upper back on bench, drive through heels. Full hip extension, squeeze glutes hard at top."
                    },
                    {
                        id: 4158,
                        name: "Romanian Deadlift",
                        image: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=300",
                        sets: 4,
                        reps: "10 reps",
                        note: "Hip hinge pattern. Feel deep stretch in hamstrings. Keep bar close to body, chest up."
                    },
                    {
                        id: 4159,
                        name: "Cable Pull-Through",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "15 reps",
                        note: "Rope attachment between legs. Hip hinge back, explosive hip extension forward. Glute squeeze at top."
                    },
                    {
                        id: 4160,
                        name: "Single Leg Glute Bridge",
                        image: "https://images.unsplash.com/photo-1599058917727-df1fc82dc5a5?w=300",
                        sets: 3,
                        reps: "15 reps per leg",
                        note: "Shoulders on ground. One leg extended. Drive through planted heel, maximize glute contraction."
                    },
                    {
                        id: 4161,
                        name: "Hamstring Curl (Lying)",
                        image: "https://images.unsplash.com/photo-1434754205268-ad3b5f549b11?w=300",
                        sets: 3,
                        reps: "12-15 reps",
                        note: "Isolation finisher. Point toes, curl heels toward glutes. Squeeze at top, slow eccentric."
                    },
                    {
                        id: 4162,
                        name: "Cable Kickbacks",
                        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300",
                        sets: 3,
                        reps: "20 reps per leg",
                        note: "Ankle strap. Slight forward lean. Kick straight back, squeeze glute. Don't arch lower back excessively."
                    }
                ]
            }
        ]
    },
    {
        id: 28,
        title: "The Arm Farm",
        slug: "the-arm-farm",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400",

        meta: {
            days: 4,
            goal: "Muscle Gain",
            muscle: "Arms & Shoulders",
            equipment: "Full Gym",
            level: "Intermediate",
            author: "Mike Guns",
            rating: 4.7,
            reviews: 356
        },

        description: `
    <p><strong>The Arm Development Blueprint:</strong> Building impressive arms requires more than random curls and pushdowns. This program strategically targets all three heads of the triceps, both heads of the biceps, and all three deltoid heads using varied angles, rep ranges, and intensity techniques. We incorporate both heavy compound movements (close-grip bench, overhead press) and targeted isolation work to maximize muscle fiber recruitment. The principle of progressive tension overload ensures continuous growth, while strategic exercise sequencing prevents premature fatigue. Shoulder development frames the entire upper body, making arms appear larger and creating the coveted V-taper physique.</p>
    <br/>
    <p><strong>Who is this for?</strong> Lifters wanting to prioritize upper body aesthetics and arm development, bodybuilding enthusiasts focused on proportional development, individuals looking to add size to lagging arm and shoulder muscles, and those who want sleeve-stretching growth. This program requires foundational strength and understanding of mind-muscle connection for optimal results.</p>
    <br/>
    <p><strong>Training Structure:</strong> Four targeted sessions per week: Day 1 focuses on biceps and rear delts, Day 2 emphasizes triceps and side delts, Day 3 combines shoulders with compound pressing, and Day 4 delivers an arm superset assault for maximum pump and metabolic stress. Each session includes 12-16 total sets for the target muscle groups, utilizing rest-pause sets, drop sets, and supersets for advanced intensity.</p>
    <br/>
    <p><strong>Nutrition and Recovery:</strong> Arm growth requires a caloric surplus and adequate protein (0.8-1g per pound bodyweight). Arms recover quickly due to smaller muscle mass, allowing higher training frequency. Prioritize sleep and consider intra-workout nutrition (BCAAs or carbs) during longer sessions to prevent muscle breakdown.</p>
  `,

        schedule: [
            {
                phaseName: "Week 1-4: Mass Building Phase",
                duration: "Est. 50 min",
                exercises: [
                    {
                        id: 4163,
                        name: "Barbell Curl",
                        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300",
                        sets: 4,
                        reps: "8-10 reps",
                        note: "Primary bicep builder. Shoulder-width grip, elbows locked at sides. No swinging or momentum."
                    },
                    {
                        id: 4164,
                        name: "Close-Grip Bench Press",
                        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300",
                        sets: 4,
                        reps: "8-10 reps",
                        note: "Primary tricep mass builder. Hands inside shoulder width. Lower to lower chest, press up powerfully."
                    },
                    {
                        id: 4165,
                        name: "Hammer Curls",
                        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Neutral grip (palms facing each other). Targets brachialis and brachioradialis for arm thickness."
                    },
                    {
                        id: 4166,
                        name: "Overhead Dumbbell Extension",
                        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Single heavy dumbbell overhead. Lower behind head, stretch triceps. Press back up to full extension."
                    },
                    {
                        id: 4167,
                        name: "Cable Rope Pushdown",
                        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300",
                        sets: 3,
                        reps: "15 reps",
                        note: "Elbows pinned at sides. Push down and split rope at bottom. Squeeze triceps hard, controlled return."
                    }
                ]
            },
            {
                phaseName: "Week 5-8: Shoulder Emphasis & Arm Refinement",
                duration: "Est. 55 min",
                exercises: [
                    {
                        id: 4168,
                        name: "Overhead Barbell Press",
                        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=300",
                        sets: 4,
                        reps: "8 reps",
                        note: "Standing or seated. Press straight overhead, don't lean back excessively. Full lockout at top."
                    },
                    {
                        id: 4169,
                        name: "Lateral Raises",
                        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=300",
                        sets: 4,
                        reps: "15-20 reps",
                        note: "Light dumbbells. Raise to shoulder height, slight forward angle. Feel burn in side delts. Control descent."
                    },
                    {
                        id: 4170,
                        name: "Face Pulls",
                        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300",
                        sets: 3,
                        reps: "20 reps",
                        note: "Rope attachment. Pull toward face, externally rotate shoulders. Squeeze rear delts and upper back."
                    },
                    {
                        id: 4171,
                        name: "Preacher Curl",
                        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Arm pad isolates biceps. No momentum possible. Full stretch at bottom, squeeze at top."
                    },
                    {
                        id: 4172,
                        name: "Dips (Tricep Variation)",
                        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300",
                        sets: 3,
                        reps: "10-12 reps",
                        note: "Upright torso, elbows back. Lower until upper arms parallel to ground. Add weight if needed."
                    },
                    {
                        id: 4173,
                        name: "21s Bicep Curl",
                        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300",
                        sets: 2,
                        reps: "21 total (7+7+7)",
                        note: "7 bottom-half reps + 7 top-half reps + 7 full reps. Brutal finisher for maximum pump."
                    }
                ]
            }
        ]
    },
    {
        id: 29,
        title: "Posture Fix Protocol",
        slug: "posture-fix-protocol",
        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=400",

        meta: {
            days: 4,
            goal: "Mobility",
            muscle: "Back & Core",
            equipment: "Minimal",
            level: "Beginner",
            author: "Dr. Alex Spine",
            rating: 4.9,
            reviews: 734
        },

        description: `
    <p><strong>The Modern Posture Crisis:</strong> Hours spent hunched over computers, phones, and desks create predictable muscular imbalances: tight chest and hip flexors, weak upper back and glutes, forward head posture, and rounded shoulders. These issues lead to chronic pain, reduced mobility, decreased athletic performance, and even breathing difficulties. This program systematically corrects these imbalances through targeted stretching of overactive muscles, strengthening of underactive muscles, and movement pattern retraining. We address the root causes rather than just treating symptoms, creating lasting postural improvements.</p>
    <br/>
    <p><strong>Who is this for?</strong> Office workers experiencing neck, shoulder, or back pain, individuals with forward head posture or rounded shoulders, anyone spending 4+ hours daily at a desk or computer, people with text neck from excessive phone use, and those wanting to move better and stand taller. This program requires minimal equipment and can be done at home or office.</p>
    <br/>
    <p><strong>The Correction Strategy:</strong> We follow the "release, activate, integrate" approach. First, we release tight muscles through targeted stretching and mobility work. Second, we activate weak, underactive muscles through corrective exercises. Finally, we integrate these improvements through functional movement patterns that retrain proper posture. Each 30-minute session addresses specific postural issues with immediate benefits you'll notice after the first workout.</p>
    <br/>
    <p><strong>Long-Term Benefits:</strong> Reduced or eliminated chronic pain, improved breathing and energy levels, enhanced confidence through better posture, decreased injury risk, better athletic performance, and reversal of aging-related postural decline. Many clients report feeling taller and more confident within 2-3 weeks.</p>
  `,

        schedule: [
            {
                phaseName: "Week 1-4: Foundation Corrections",
                duration: "Est. 30 min",
                exercises: [
                    {
                        id: 4174,
                        name: "Doorway Chest Stretch",
                        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300",
                        sets: 3,
                        reps: "60 seconds hold",
                        note: "Arm at shoulder height on doorframe. Step forward until stretch felt in chest. Critical for shoulder opening."
                    },
                    {
                        id: 4175,
                        name: "Band Pull-Aparts",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 3,
                        reps: "20 reps",
                        note: "Light resistance band. Arms straight, pull band to chest. Squeeze shoulder blades together hard."
                    },
                    {
                        id: 4176,
                        name: "Wall Angels",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Back flat against wall. Slide arms up and down like snow angel. Keep contact with wall throughout."
                    },
                    {
                        id: 4177,
                        name: "Cat-Cow Stretch",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 3,
                        reps: "15 reps",
                        note: "On hands and knees. Alternate arching back (cow) and rounding spine (cat). Improves spinal mobility."
                    },
                    {
                        id: 4178,
                        name: "Glute Bridge",
                        image: "https://images.unsplash.com/photo-1599058917727-df1fc82dc5a5?w=300",
                        sets: 3,
                        reps: "15 reps",
                        note: "Feet flat, knees bent. Lift hips, squeeze glutes hard at top. Counteracts hip flexor tightness."
                    },
                    {
                        id: 4179,
                        name: "Chin Tucks",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Pull chin straight back (double chin). Hold 5 seconds. Strengthens deep neck flexors, critical for text neck."
                    }
                ]
            },
            {
                phaseName: "Week 5-8: Advanced Integration",
                duration: "Est. 35 min",
                exercises: [
                    {
                        id: 4180,
                        name: "Prone Y-T-W Raises",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 3,
                        reps: "10 reps each position",
                        note: "Face down on bench or floor. Arms form Y, then T, then W. Squeeze shoulder blades. Light or no weight."
                    },
                    {
                        id: 4181,
                        name: "Dead Bug",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 3,
                        reps: "12 reps per side",
                        note: "On back, arms up. Extend opposite arm and leg while maintaining flat back. Core anti-extension work."
                    },
                    {
                        id: 4182,
                        name: "Hip Flexor Stretch (Half-Kneeling)",
                        image: "https://images.unsplash.com/photo-1599058917727-df1fc82dc5a5?w=300",
                        sets: 3,
                        reps: "60 seconds per side",
                        note: "One knee down. Push hips forward, squeeze glute of rear leg. Feel stretch in front of hip."
                    },
                    {
                        id: 4183,
                        name: "Banded Face Pulls",
                        image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=300",
                        sets: 3,
                        reps: "20 reps",
                        note: "Band at face height. Pull toward face, externally rotate. Targets rear delts and external rotators."
                    },
                    {
                        id: 4184,
                        name: "Bird Dog",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 3,
                        reps: "10 reps per side",
                        note: "Hands and knees. Extend opposite arm and leg. Hold 3 seconds. Trains spinal stability."
                    },
                    {
                        id: 4185,
                        name: "Thoracic Spine Extension (Foam Roller)",
                        image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=300",
                        sets: 1,
                        reps: "10 reps",
                        note: "Foam roller under mid-back. Support head with hands. Extend back over roller. Critical for reversing desk hunch."
                    }
                ]
            }
        ]
    },

    {
        id: 30,
        title: "Busy Parent Express",
        slug: "busy-parent-express",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200",
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400",

        meta: {
            days: 3,
            goal: "Fat Loss",
            muscle: "Full Body",
            equipment: "Minimal",
            level: "Beginner",
            author: "Rachel Quick",
            rating: 4.8,
            reviews: 521
        },

        description: `
    <p><strong>Fitness in the Real World:</strong> Parenting is demanding, time-consuming, and unpredictable. Finding an hour to train feels impossible between work, childcare, household responsibilities, and exhaustion. This program acknowledges your reality and delivers results in just 30 minutes, three times per week. We focus on high-intensity, full-body circuits that maximize calorie burn and muscle engagement in the shortest possible time. The exercises require minimal equipment (a set of dumbbells or even just bodyweight) and can be done at home, in the garage, or a small corner of the gym.</p>
    <br/>
    <p><strong>Who is this for?</strong> Busy parents, professionals with limited time, travelers, or anyone who needs an effective, efficient, and flexible workout routine. This program is suitable for beginners to intermediate fitness levels, as the intensity is self-regulated. If you have 30 minutes and a desire to move, this program is for you.</p>
    <br/>
    <p><strong>Training Philosophy:</strong> We use a circuit-training approach. You perform one set of each exercise back-to-back with minimal rest, then rest for 60-90 seconds before repeating the circuit. This keeps your heart rate elevated for cardiovascular benefits while simultaneously building strength and endurance. The goal is to move quickly and efficiently, focusing on compound movements that work multiple muscle groups at once.</p>
    <br/>
    <p><strong>Flexibility:</strong> The three weekly workouts (A, B, C) can be done on any non-consecutive days (e.g., Mon, Wed, Fri). If you miss a day, just pick up where you left off. Life happens, and this program is designed to be forgiving.</p>
  `,

        schedule: [
            {
                phaseName: "Workout A: Full Body Circuit",
                duration: "Est. 30 min",
                exercises: [
                    {
                        id: 4201,
                        name: "Dumbbell Thrusters",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Squat down, then use momentum to press dumbbells overhead. Full body, high-calorie burn."
                    },
                    {
                        id: 4202,
                        name: "Push-ups (or Incline Push-ups)",
                        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300",
                        sets: 3,
                        reps: "Max reps",
                        note: "Modify by placing hands on a chair or bench for an incline. Keep core tight."
                    },
                    {
                        id: 4203,
                        name: "Dumbbell Rows (Single Arm)",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 3,
                        reps: "10 reps per arm",
                        note: "Support one knee and hand on a bench. Pull elbow toward ceiling, squeeze back."
                    },
                    {
                        id: 4204,
                        name: "Plank to Downward Dog",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 3,
                        reps: "10 reps",
                        note: "Move smoothly between plank position and pushing hips up and back. Core and mobility."
                    }
                ]
            },
            {
                phaseName: "Workout B: Lower Body & Core Blast",
                duration: "Est. 30 min",
                exercises: [
                    {
                        id: 4205,
                        name: "Reverse Lunges (Bodyweight or Dumbbell)",
                        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300",
                        sets: 3,
                        reps: "10 reps per leg",
                        note: "Step backward. Keep front knee over ankle. Focus on balance and glute engagement."
                    },
                    {
                        id: 4206,
                        name: "Dumbbell Swing",
                        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300",
                        sets: 3,
                        reps: "15 reps",
                        note: "Hinge at hips, use glutes and hamstrings to explosively drive the weight up to chest height. Not a squat."
                    },
                    {
                        id: 4207,
                        name: "Side Plank (Hold)",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 3,
                        reps: "30 seconds per side",
                        note: "On elbow. Keep body in a straight line. Focus on oblique and hip stability."
                    },
                    {
                        id: 4208,
                        name: "Jumping Jacks",
                        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=300",
                        sets: 3,
                        reps: "45 seconds",
                        note: "High-intensity cardio burst. Maintain a quick pace."
                    }
                ]
            },
            {
                phaseName: "Workout C: Upper Body & Cardio",
                duration: "Est. 30 min",
                exercises: [
                    {
                        id: 4209,
                        name: "Dumbbell Overhead Press (Seated or Standing)",
                        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=300",
                        sets: 3,
                        reps: "12 reps",
                        note: "Press dumbbells straight up. Control the weight on the way down."
                    },
                    {
                        id: 4210,
                        name: "Burpees (or Step-up Burpees)",
                        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300",
                        sets: 3,
                        reps: "10 reps",
                        note: "Modify by stepping feet back and forward instead of jumping. Explosive movement."
                    },
                    {
                        id: 4211,
                        name: "Dumbbell Bicep Curl to Tricep Extension",
                        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300",
                        sets: 3,
                        reps: "10 reps",
                        note: "Superset: perform curls immediately followed by overhead tricep extensions. Arm pump."
                    },
                    {
                        id: 4212,
                        name: "Mountain Climbers",
                        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=300",
                        sets: 3,
                        reps: "45 seconds",
                        note: "In plank position, alternate bringing knees to chest. Maintain a fast pace and flat back."
                    }
                ]
            }
        ]
    }
];