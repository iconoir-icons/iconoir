import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RemovePin extends StatelessWidget {
  const RemovePin({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/RemovePin.svg');
}
