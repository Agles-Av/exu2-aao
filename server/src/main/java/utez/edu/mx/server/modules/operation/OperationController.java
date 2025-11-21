package utez.edu.mx.server.modules.operation;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.server.modules.operation.dto.OperationDTO;

@RestController
@RequestMapping("/api/operation")
@CrossOrigin(allowedHeaders = "*")
public class OperationController {
    @Autowired
    private OperationService service;

    @PostMapping("/")
    public ResponseEntity<?> sumar(@RequestBody OperationDTO dto){
        return service.sumarNumeros(dto);
    }
}
