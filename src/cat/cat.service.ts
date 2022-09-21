import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { DelimiterParser, SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import { OperandDto } from './dto/add-sum.dto';
import { BehaviorSubject, filter, Observable, take, takeLast } from 'rxjs';
let tyy: string = ' ';
const myPort = new SerialPort({
  path: 'COM4',
  baudRate: 9600,
}).setEncoding('ascii');
const parser = myPort.pipe(new ReadlineParser());
myPort.pipe(parser)

myPort.on('open', () => {
  console.log("The port is opened");
});

myPort.on('close', () => {
  console.log("The port was closed");
});
myPort.on('error', (error) => {
  console.log(error);
});
parser.on('data', (data) => {
  tyy = data;
});


@Injectable()
export class CatService {
  tempString: string;
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>
  ) {
    
  }

  create(createCatDto: CreateCatDto) {
    const newCat = this.catRepository.create(createCatDto);
    return this.catRepository.save(newCat);
  }

  async add(addsum: OperandDto) {
    await myPort.write(`${addsum.operand1}\n`, 'ascii', (error) => {
      //console.log(error);
    });


    await myPort.write(`${addsum.operand2}\n`, 'ascii', (error) => {
      //console.log(error);
    });
    setTimeout(()=>{},500);

    return {"answer":tyy};
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  findAll() {
    return SerialPort.list();
  }

  async findOne(id: string) {
    const portList = await SerialPort.list();

    return portList.find(port => port.path === id);
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
