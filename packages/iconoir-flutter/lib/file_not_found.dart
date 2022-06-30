import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FileNotFound extends StatelessWidget {
  const FileNotFound({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FileNotFound.svg');
}
