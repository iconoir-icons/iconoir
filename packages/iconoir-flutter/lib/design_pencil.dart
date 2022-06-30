import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DesignPencil extends StatelessWidget {
  const DesignPencil({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DesignPencil.svg');
}
