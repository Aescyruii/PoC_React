import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TaskList from './TaskList.json';

type Task = {
    id: number;
    name: string;
    desc: string;
    due: string;
};

const listTask = TaskList.map(task => task as Task)

function TestCard(): JSX.Element {
    const cards = listTask.map(
        task =>
            <li key={task.id} style={{float: "left", marginRight: 75, listStyleType: "none"}}>
                <Card sx={{minWidth: 550}}>
                    <CardContent>
                        <Typography variant='h3'>
                            {task.name}
                        </Typography>
                        <Typography color='textSecondary' sx={{mb: 1}}>
                            {task.desc}
                        </Typography>
                        <Typography sx={{mb: 2}}>
                            Due for {task.due}
                        </Typography>
                    </CardContent>
                </Card>
            </li>
        )
    return (<ul style={{paddingLeft: 0}}>{cards}</ul>);
}

export default TestCard;
