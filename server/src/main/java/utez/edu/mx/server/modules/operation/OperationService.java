package utez.edu.mx.server.modules.operation;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import utez.edu.mx.server.modules.operation.dto.OperationDTO;
import utez.edu.mx.server.utils.ApiResponse;

@Service
@AllArgsConstructor
public class OperationService {

    public ResponseEntity<ApiResponse> sumarNumeros(OperationDTO dto){
        ApiResponse body = null;
        float suma = dto.getNum1() + dto.getNum2();

        body = new ApiResponse("Operacion realizada correctamente", suma, HttpStatus.OK);

        return new ResponseEntity<>(body, body.getStatus());
    }


}
