import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DataTransferWarning extends StatelessWidget {
  const DataTransferWarning({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DataTransferWarning.svg');
}
