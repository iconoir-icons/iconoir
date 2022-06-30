import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Upload extends StatelessWidget {
  const Upload({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Upload.svg');
}
