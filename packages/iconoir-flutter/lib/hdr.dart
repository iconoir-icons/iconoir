import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Hdr extends StatelessWidget {
  const Hdr({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Hdr.svg');
}
